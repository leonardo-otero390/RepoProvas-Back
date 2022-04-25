import {
  Test,
  Category,
  TeachersDiscipline,
  Discipline,
  Teacher,
} from '@prisma/client';
import { httpErrors } from '../errors/HttpError.js';
import * as testRepository from '../repositories/testRepository.js';
import * as disciplineService from '../services/disciplineService.js';

type Tests = (Test & {
  categories: Category;
  teachersDisciplines: TeachersDiscipline & {
    disciplines: Discipline;
    teachers: Teacher;
  };
})[];

function handleTests(tests: Tests) {
  return tests.map(
    ({
      categoryId,
      teacherDisciplineId,
      categories,
      teachersDisciplines,
      ...t
    }) => ({
      ...t,
      category: categories,
      teacher: teachersDisciplines.teachers,
    })
  );
}

function handleDisciplines(
  discipline: {
    id: number;
    name: string;
  },
  tests: Tests
) {
  const disciplineTests = tests.filter(
    (t) => t.teachersDisciplines.disciplineId === discipline.id
  );

  const testHandled = handleTests(disciplineTests);
  return {
    ...discipline,
    tests: testHandled,
  };
}

interface TermToHandle {
  disciplines: {
    id: number;
    name: string;
  }[];
  id: number;
  number: number;
}

function handleTerms(term: TermToHandle, tests: Tests) {
  const disciplines = term.disciplines.map((d) => handleDisciplines(d, tests));
  return {
    ...term,
    disciplines,
  };
}
async function groupByDisciplines(tests: Tests) {
  const terms = await disciplineService.findGroupByTerms();
  return terms.map((term) => handleTerms(term, tests));
}

export async function find() {
  const tests =
    await testRepository.findManyWithCategoriesAndTeachersDisciplines();
  if (!tests) throw httpErrors.notFound('There are no tests');
  return groupByDisciplines(tests);
}

export async function findManyWithDisciplines() {
  const tests = await testRepository.findManyWithDisciplines();
  if (!tests) throw httpErrors.notFound('There are no tests');
  return tests.map(({ teacherDisciplineId, teachersDisciplines, ...t }) => ({
    ...t,
    discipline: teachersDisciplines.disciplines,
  }));
}
