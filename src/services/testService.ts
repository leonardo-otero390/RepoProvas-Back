import { httpErrors } from '../errors/HttpError.js';
import { NewTestReq } from '../interfaces/Test.js';
import * as testRepository from '../repositories/testRepository.js';
import * as tDService from '../services/teacherDisciplineService.js';
import * as categoryService from '../services/categoryService.js';

export async function findIncludingAll(id: number) {
  const test = await testRepository.findIncludingAll(id);
  if (!test) {
    throw httpErrors.notFound('Test not found');
  }
  return test;
}

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

export async function create(data: NewTestReq) {
  await categoryService.find(data.categoryId);
  const { id } = await tDService.findByDisciplineAndTeacherId(data);
  const { teacherId, disciplineId, ...cleanData } = data;
  return testRepository.create({ ...cleanData, teacherDisciplineId: id });
}
