import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import * as userRepository from '../repositories/userRepository.js';
import Unauthorized from '../errors/UnauthorizedError.js';

function comparePassword(password: string, hash: string) {
  const result = bcrypt.compareSync(password, hash);
  if (!result) throw new Unauthorized('Incorrect email or password');
}

export async function create({ email, password }: Omit<User, 'id'>) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new Unauthorized('Incorrect email or password');
  const { id, password: hashedPassword } = user;
  comparePassword(password, hashedPassword);

  return jwt.sign({ id }, process.env.JWT_SECRET);
}
