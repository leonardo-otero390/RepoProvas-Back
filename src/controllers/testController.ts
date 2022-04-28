import { Request, Response } from 'express';
import * as testService from '../services/testService.js';

export async function findManyByDisciplineId(req: Request, res: Response) {
  const disciplineId = Number(req.params.disciplineId);
  if (Number.isNaN(disciplineId)) {
    return res.status(400).send('O id do período deve ser um número');
  }

  const disciplines = await testService.findManyByDisciplineId(disciplineId);
  return res.send(disciplines);
}
