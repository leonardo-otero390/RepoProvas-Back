import { httpErrors } from '../errors/HttpError.js';
import * as teacherRepository from '../repositories/teacherRepository.js';
import * as categoryService from '../services/categoryService.js';
import * as testService from '../services/testService.js';

export async function findManyWithCategoriesAndTests() {
  const teachers = await teacherRepository.findMany();
  if (!teachers) httpErrors.notFound('Não foi possível encontrar professores');
  const categories = await categoryService.findMany();
  const teachersWithCategories = teachers.map((teacher) => ({
    teacher,
    categories,
  }));
  const tests = await testService.findManyWithDisciplines();
  return teachersWithCategories.map((teacherWithCategories) => {
    const categoryWithTests = teacherWithCategories.categories.map(
      (category) => {
        const testsByCategory = tests
          .filter((test) => test.categoryId === category.id)
          .map(({ categoryId, ...test }) => test);
        return {
          category,
          tests: testsByCategory,
        };
      }
    );
    return {
      teacher: teacherWithCategories.teacher,
      categories: categoryWithTests,
    };
  });
}
