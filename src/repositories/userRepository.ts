import { User } from '@prisma/client';
import { client } from '../database.js';

export async function create(data: Omit<User, 'id'>) {
  await client.user.create({ data });
}

export async function findByEmail(email: string) {
  return client.user.findUnique({ where: { email } });
}
