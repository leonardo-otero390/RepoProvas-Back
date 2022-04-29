import { httpErrors } from '../errors/HttpError.js';
import * as teacherRepository from '../repositories/teacherRepository.js';

export async function findMany() {
  const teachers = await teacherRepository.findMany();
  if (!teachers) httpErrors.notFound('Não foi possível encontrar periodos');
  return teachers;
}
