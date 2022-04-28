import { httpErrors } from '../errors/HttpError.js';
import * as termRepository from '../repositories/termRepository.js';

export async function findMany() {
  const categories = await termRepository.findMany();
  if (!categories) httpErrors.notFound('Não foi possível encontrar periodos');
  return categories;
}
