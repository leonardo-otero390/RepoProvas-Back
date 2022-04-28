import { httpErrors } from '../errors/HttpError.js';
import * as testRepository from '../repositories/testRepository.js';

export async function findManyByDisciplineId(id: number) {
  const categories = await testRepository.findManyWithTestsAndTeachers(id);
  if (!categories) httpErrors.notFound('Não foi possível encontrar categorias');
  return categories;
}
