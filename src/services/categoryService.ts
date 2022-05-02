import { httpErrors } from '../errors/HttpError.js';
import * as categoryRepository from '../repositories/categoryRepository.js';

export async function find(id: number) {
  const result = await categoryRepository.find(id);
  if (!result) {
    httpErrors.notFound('Não foi possível encontrar essa categoria');
  }
  return result;
}

export async function findMany() {
  return categoryRepository.findMany();
}
