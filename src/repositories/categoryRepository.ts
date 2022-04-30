import { client } from '../database.js';

export const find = async (id: number) =>
  client.category.findUnique({ where: { id } });
