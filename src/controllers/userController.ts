import { Request, Response } from 'express';
import * as userService from '../services/userService.js';
import * as sessionService from '../services/sessionService.js';

export async function signUp(req: Request, res: Response) {
  await userService.create(req.body);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const token = await sessionService.create(req.body);
  res.send({ token });
}
