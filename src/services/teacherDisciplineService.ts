import { httpErrors } from '../errors/HttpError.js';
import * as tDRepository from '../repositories/teacherDisciplineRepository.js';

export async function findByDisciplineAndTeacherId(data: {
  teacherId: number;
  disciplineId: number;
}) {
  const result = await tDRepository.findByDisciplineAndTeacherId(data);
  if (!result) {
    throw httpErrors.notFound(
      'Não foi possível encontrar essa combinação de professor e disciplina'
    );
  }
  return result;
}

export async function findTeachersByDisciplineId(disciplineId: number) {
  const result = await tDRepository.findTeachersByDisciplineId(disciplineId);
  if (!result) {
    throw httpErrors.notFound(
      'Não foi possível encontrar professores para essa disciplina'
    );
  }
  return result;
}
