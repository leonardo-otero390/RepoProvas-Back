import { Request, Response } from 'express';
import * as disciplineService from '../services/disciplineService.js';

export async function findManyByTermId(req: Request, res: Response) {
  const termId = Number(req.params.termId);
  if (Number.isNaN(termId)) {
    return res.status(400).send('O id do período deve ser um número');
  }

  const disciplines = await disciplineService.findManyByTermId(termId);
  return res.send(disciplines);
}

export async function findMany(req: Request, res: Response) {
  const { name } = req.query;
  if (name) {
    const disciplines = await disciplineService.findManyByPartialName(
      name.toString()
    );
    return res.send(disciplines);
  }
  const disciplines = await disciplineService.findMany();
  return res.send(disciplines);
}
