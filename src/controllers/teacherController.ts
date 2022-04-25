import { Request, Response } from 'express';
import * as teacherService from '../services/teacherService.js';

export async function findWithCategoriesAndTests(req: Request, res: Response) {
  const teachers = await teacherService.findManyWithCategoriesAndTests();
  res.send(teachers);
}
