import { client } from '../database.js';
import { User } from '../interfaces/User.js';

export async function create(data: User) {
  await client.users.create({ data });
}

export async function findByEmail(email: string) {
  return client.users.findUnique({ where: { email } });
}
