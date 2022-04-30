import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';
import * as categoryFactory from './categoryFactory.js';
import * as teacherDisciplineFactory from './teachersDisciplineFactory.js';

export async function generateData() {
  const year = faker.datatype.number({ min: 2000, max: 2022 });
  const semester = faker.datatype.number({ min: 1, max: 2 });
  const category = await categoryFactory.create();
  const {
    teacherId,
    disciplineId,
    id: teacherDisciplineId,
  } = await teacherDisciplineFactory.create();

  return {
    name: `${year}.${semester}`,
    pdfUrl: faker.internet.url(),
    categoryId: category.id,
    teacherDisciplineId,
    teacherId,
    disciplineId,
  };
}

export async function create() {
  const data = await generateData();

  const { teacherId, disciplineId, ...cleanData } = data;

  return client.test.create({
    data: cleanData,
  });
}
