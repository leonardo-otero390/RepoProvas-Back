import { client } from '../database.js';
import { NewTest } from '../interfaces/Test.js';

export const create = async (data: NewTest) => client.test.create({ data });

export const find = async (id: number) =>
  client.test.findUnique({ where: { id } });

export const findIncludingAll = async (id: number) =>
  client.test.findUnique({
    include: {
      categories: true,
      teachersDisciplines: { include: { teachers: true, disciplines: true } },
    },
    where: { id },
  });

export const incrementViews = async (id: number) =>
  client.test.update({ data: { views: { increment: 1 } }, where: { id } });

function searchSettings({
  selection,
  filter,
}: {
  selection: { teachers: true } | { disciplines: true };
  filter: { teacherId: number } | { disciplineId: number };
}) {
  const defaultTestSettings = {
    id: true,
    name: true,
    pdfUrl: true,
    views: true,
  };
  return {
    include: {
      tests: {
        select: {
          ...defaultTestSettings,
          teachersDisciplines: {
            select: selection,
          },
        },
        where: { teachersDisciplines: filter },
      },
    },
  };
}

export const findManyByDisciplineIdGroupByCategory = async (id: number) =>
  client.category.findMany(
    searchSettings({
      selection: { teachers: true },
      filter: { disciplineId: id },
    })
  );

export const findManyByTeacherIdGroupByCategory = async (id: number) =>
  client.category.findMany(
    searchSettings({
      selection: { disciplines: true },
      filter: { teacherId: id },
    })
  );
