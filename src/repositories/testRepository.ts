import { client } from '../database.js';

export const findManyWithCategoriesAndTeachersDisciplines = async () =>
  client.test.findMany({
    include: {
      categories: true,
      teachersDisciplines: {
        include: { teachers: true, disciplines: true },
      },
    },
  });

export const findManyWithDisciplines = async () =>
  client.test.findMany({
    include: { teachersDisciplines: { include: { disciplines: true } } },
  });
