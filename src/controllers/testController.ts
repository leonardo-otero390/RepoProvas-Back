import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { send as sendMail } from '../services/emailService.js';
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

export async function incrementViews(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).send('O id do teste deve ser um número');
  }
  const test = await testService.incrementViews(id);
  return res.send(test);
}

export async function create(req: Request, res: Response) {
  const result = await testService.create(req.body);

  const user = res.locals.user as User;

  sendMail(user.email, result.id);
  return res.status(201).send(result);
}
