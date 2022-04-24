import { client } from '../database.js';

export const findMany = async () =>
  client.test.findMany({
    include: {
      categories: true,
      teachersDisciplines: {
        include: { teachers: true, disciplines: true },
      },
    },
  });
