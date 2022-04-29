import { client } from '../database.js';

export const findManyByDisciplineIdGroupByCategory = async (id: number) =>
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

export const findManyByTeacherIdGroupByCategory = async (id: number) =>
  client.category.findMany({
    include: {
      tests: {
        include: {
          teachersDisciplines: {
            select: {
              disciplines: true,
            },
          },
        },
        where: { teachersDisciplines: { teacherId: id } },
      },
    },
  });
