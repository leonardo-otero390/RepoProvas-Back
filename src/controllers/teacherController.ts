import { Request, Response } from 'express';
import * as teacherService from '../services/teacherService.js';

export async function findMany(req: Request, res: Response) {
  const teachers = await teacherService.findMany();
  res.send(teachers);
}
