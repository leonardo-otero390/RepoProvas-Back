import { client } from '../database.js';

export const findManyByDisciplineIdGroupByCategory = async (id: number) =>
  client.category.findMany({
    include: {
      tests: {
        select: {
          id: true,
          name: true,
          pdfUrl: true,
          teachersDisciplines: {
            select: {
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
        select: {
          id: true,
          name: true,
          pdfUrl: true,
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
