import { Request, Response } from 'express';
import * as testService from '../services/testService.js';

export async function findManyByDisciplineId(req: Request, res: Response) {
  const disciplineId = Number(req.params.disciplineId);
  if (Number.isNaN(disciplineId)) {
    return res.status(400).send('O id da disciplina deve ser um número');
  }

  const tests = await testService.findManyByDisciplineId(disciplineId);
  return res.send(tests);
}

export async function findManyByTeacherId(req: Request, res: Response) {
  const teacherId = Number(req.params.teacherId);
  if (Number.isNaN(teacherId)) {
    return res.status(400).send('O id do professor deve ser um número');
  }

  const tests = await testService.findManyByTeacherId(teacherId);
  return res.send(tests);
}
