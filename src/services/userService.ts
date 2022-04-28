import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { httpErrors } from '../errors/HttpError.js';
import * as userRepository from '../repositories/userRepository.js';

export async function create({ email, password }: User) {
  const alreadyExists = await userRepository.findByEmail(email);
  if (alreadyExists) throw httpErrors.conflict('User already exists');
  const hashedPassword = bcrypt.hashSync(password, 10);
  await userRepository.create({
    email,
    password: hashedPassword,
  });
}

export async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw httpErrors.notFound('User not found');
  return user;
}
