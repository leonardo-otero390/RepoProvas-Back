import { client } from '../../src/database.js';
import truncateAllTables from '../../prisma/seeds/clearDatabase.js';

export async function clearDatabase() {
  await truncateAllTables();
}
export async function disconnect() {
  await client.$disconnect();
}

export async function findUser(email: string) {
  return client.user.findUnique({ where: { email } });
}
