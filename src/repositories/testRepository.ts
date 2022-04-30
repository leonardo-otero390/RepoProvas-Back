import { client } from '../database.js';

export const find = async (id: number) =>
  client.test.findUnique({ where: { id } });

export const incrementViews = async (id: number) =>
  client.test.update({ data: { views: { increment: 1 } }, where: { id } });

export const findManyByDisciplineIdGroupByCategory = async (id: number) =>
  client.category.findMany({
    include: {
      tests: {
        select: {
          id: true,
          name: true,
          pdfUrl: true,
          views: true,
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
          views: true,
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
