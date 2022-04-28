import { httpErrors } from '../errors/HttpError.js';
import * as disciplineRepository from '../repositories/disciplineRepository.js';

export async function findManyByTermId(termId: number) {
  const categories = await disciplineRepository.findManyByTermId(termId);
  if (!categories) httpErrors.notFound('Não foi possível encontrar categorias');
  return categories;
}
