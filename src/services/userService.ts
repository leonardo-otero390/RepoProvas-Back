import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import Conflict from '../errors/ConflictError.js';
import * as userRepository from '../repositories/userRepository.js';

export async function create({ email, password }: User) {
  const alreadyExists = await userRepository.findByEmail(email);
  if (alreadyExists) throw new Conflict('Email already in use');
  const hashedPassword = bcrypt.hashSync(password, 10);
  await userRepository.create({
    email,
    password: hashedPassword,
  });
}
