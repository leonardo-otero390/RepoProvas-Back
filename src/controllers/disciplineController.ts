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
