import { Request, Response } from 'express';
import * as teacherService from '../services/teacherService.js';

export async function findMany(req: Request, res: Response) {
  const { name } = req.query;
  if (name) {
    const teachers = await teacherService.findManyByPartialName(
      name.toString()
    );
    return res.send(teachers);
  }
  const teachers = await teacherService.findMany();
  return res.send(teachers);
}
