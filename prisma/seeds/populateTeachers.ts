import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';

export default async function populateTeachers() {
  const teachers = [];
  for (let i = 0; i < 10; i += 1) {
    teachers.push({
      name: faker.name.findName(),
    });
  }
  await client.teacher.createMany({ data: teachers });
}
