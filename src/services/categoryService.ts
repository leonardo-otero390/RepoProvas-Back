import { httpErrors } from '../errors/HttpError.js';
import * as categoryRepository from '../repositories/categoryRepository.js';

export async function findMany() {
  const categories = await categoryRepository.findMany();
  if (!categories) httpErrors.notFound('Não foi possível encontrar categorias');
  return categories;
}
