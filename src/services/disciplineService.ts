import { httpErrors } from '../errors/HttpError.js';
import * as disciplineRepository from '../repositories/disciplineRepository.js';

export async function findManyByTermId(termId: number) {
  const categories = await disciplineRepository.findManyByTermId(termId);
  if (!categories) httpErrors.notFound('Não foi possível encontrar categorias');
  return categories;
}

export async function findManyByPartialName(name: string) {
  const disciplines = await disciplineRepository.findManyByPartialName(name);
  if (!disciplines) {
    httpErrors.notFound('Não foi possível encontrar disciplinas');
  }
  return disciplines;
}

export async function findMany() {
  const disciplines = await disciplineRepository.findMany();
  if (!disciplines) {
    httpErrors.notFound('Não foi possível encontrar disciplinas');
  }
  return disciplines;
}
