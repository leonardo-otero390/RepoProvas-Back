import { Request, Response } from 'express';
import * as termService from '../services/termService.js';

export async function findMany(req: Request, res: Response) {
  const terms = await termService.findMany();
  res.send(terms);
}
