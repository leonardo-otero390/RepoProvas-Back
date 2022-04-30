import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';
import * as categoryFactory from './categoryFactory.js';
import * as teacherDisciplineFactory from './teachersDisciplineFactory.js';

export async function create() {
  const year = faker.datatype.number({ min: 2000, max: 2022 });
  const semester = faker.datatype.number({ min: 1, max: 2 });
  const category = await categoryFactory.create();
  const teacherDiscipline = await teacherDisciplineFactory.create();
  const data = {
    name: `${year}.${semester}`,
    pdfUrl: faker.internet.url(),
    categoryId: category.id,
    teacherDisciplineId: teacherDiscipline.id,
  };

  return client.test.create({
    data,
  });
}
