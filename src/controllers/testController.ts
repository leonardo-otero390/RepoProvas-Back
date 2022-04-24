import { Request, Response } from 'express';
import * as testService from '../services/testService.js';

export async function find(req: Request, res: Response) {
  const tests = await testService.find();
  res.send(tests);
}
