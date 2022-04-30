import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';
import * as termFactory from './termFactory.js';

export async function createTeacher() {
  return client.teacher.create({
    data: { name: faker.name.findName() },
  });
}

export async function createDiscipline() {
  const term = await termFactory.createTerm();

  return client.discipline.create({
    data: { name: faker.name.jobTitle(), termId: term.id },
  });
}

export async function create() {
  const teacher = await createTeacher();
  const discipline = await createDiscipline();
  return client.teachersDiscipline.create({
    data: { teacherId: teacher.id, disciplineId: discipline.id },
  });
}
