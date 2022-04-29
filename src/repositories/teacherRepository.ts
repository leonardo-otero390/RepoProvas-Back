import { client } from '../database.js';

export const findMany = async () => client.teacher.findMany();

export const findManyByPartialName = async (name: string) =>
  client.teacher.findMany({
    where: { name: { contains: name, mode: 'insensitive' } },
  });
