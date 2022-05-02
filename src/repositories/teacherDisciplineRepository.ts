import { client } from '../database.js';

export const findByDisciplineAndTeacherId = async ({
  teacherId,
  disciplineId,
}: {
  teacherId: number;
  disciplineId: number;
}) =>
  client.teachersDiscipline.findFirst({ where: { teacherId, disciplineId } });

export const findTeachersByDisciplineId = async (disciplineId: number) =>
  client.teachersDiscipline.findMany({
    select: { teachers: true },
    where: { disciplineId },
  });
