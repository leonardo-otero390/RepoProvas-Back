import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';

export default async function populateTeachersDisciplines() {
  const teachers = await client.teacher.findMany();
  const disciplines = await client.discipline.findMany();
  const teachersDisciplines = [];

  for (let i = 0; i < 10; i += 1) {
    const randomTeacherIndex = faker.datatype.number(teachers.length - 2) + 1;

    const randomDisciplineIndex =
      faker.datatype.number(disciplines.length - 2) + 1;

    teachersDisciplines.push({
      teacherId: teachers[randomTeacherIndex].id,
      disciplineId: disciplines[randomDisciplineIndex].id,
    });
  }

  await client.teachersDiscipline.createMany({ data: teachersDisciplines });
}
