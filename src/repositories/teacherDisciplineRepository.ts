import { client } from '../database.js';

export const findByDisciplineAndTeacherId = async ({
  teacherId,
  disciplineId,
}: {
  teacherId: number;
  disciplineId: number;
}) =>
  client.teachersDiscipline.findFirst({ where: { teacherId, disciplineId } });
