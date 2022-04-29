import { httpErrors } from '../errors/HttpError.js';
import * as teacherRepository from '../repositories/teacherRepository.js';

export async function findMany() {
  const teachers = await teacherRepository.findMany();
  if (!teachers) httpErrors.notFound('Não foi possível encontrar periodos');
  return teachers;
}

export async function findManyByPartialName(name: string) {
  const teachers = await teacherRepository.findManyByPartialName(name);
  if (!teachers) httpErrors.notFound('Não foi possível encontrar periodos');
  return teachers;
}
