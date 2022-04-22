import { User } from '@prisma/client';
import { client } from '../database.js';

export const create = async (data: Omit<User, 'id'>) => {
  await client.user.create({ data });
};

export const findByEmail = async (email: string) =>
  client.user.findUnique({ where: { email } });
