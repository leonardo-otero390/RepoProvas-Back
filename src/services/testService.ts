import { httpErrors } from '../errors/HttpError.js';
import * as testRepository from '../repositories/testRepository.js';

export async function findManyByDisciplineId(id: number) {
  const tests = await testRepository.findManyByDisciplineIdGroupByCategory(id);
  if (!tests) httpErrors.notFound('Não foi possível encontrar tests');
  return tests;
}

export async function findManyByTeacherId(id: number) {
  const tests = await testRepository.findManyByTeacherIdGroupByCategory(id);
  if (!tests) httpErrors.notFound('Não foi possível encontrar tests');
  return tests;
}

export async function incrementViews(id: number) {
  const test = await testRepository.find(id);
  if (!test) httpErrors.notFound('Não foi possível encontrar teste');
  return testRepository.incrementViews(id);
}
