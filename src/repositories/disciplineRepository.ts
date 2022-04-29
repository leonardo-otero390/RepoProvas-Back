import { client } from '../database.js';

export const findManyByTermId = async (termId: number) =>
  client.discipline.findMany({ where: { termId } });

export const findManyByPartialName = async (name: string) =>
  client.discipline.findMany({
    where: { name: { contains: name, mode: 'insensitive' } },
  });

export const findMany = async () => client.discipline.findMany();
