import { client } from '../database.js';

export const findManyWithTestsAndTeachers = async (id: number) =>
  client.category.findMany({
    include: {
      tests: {
        include: {
          teachersDisciplines: {
            include: {
              teachers: true,
            },
          },
        },
        where: { teachersDisciplines: { disciplineId: id } },
      },
    },
  });
