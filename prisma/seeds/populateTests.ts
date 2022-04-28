import faker from '@faker-js/faker';
import { client } from '../../src/database.js';

export default async function populateTests() {
  const teachersDisciplines = await client.teachersDiscipline.findMany();
  const categories = await client.category.findMany();
  const tests = [];

  for (let i = 0; i < 10; i += 1) {
    const randomTeacherDisciplineIndex =
      faker.datatype.number(teachersDisciplines.length - 2) + 1;

    const randomCategoryIndex =
      faker.datatype.number(categories.length - 2) + 1;

    const year = faker.datatype.number({ min: 2000, max: 2022 });
    const semester = faker.datatype.number({ min: 1, max: 2 });
    tests.push({
      name: `${year}.${semester}`,
      pdfUrl: faker.image.imageUrl(),
      categoryId: categories[randomCategoryIndex].id,
      teacherDisciplineId: teachersDisciplines[randomTeacherDisciplineIndex].id,
    });
  }

  await client.test.createMany({ data: tests });
}
