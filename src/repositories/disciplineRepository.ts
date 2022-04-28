import { client } from '../database.js';

export const findManyByTermId = async (termId: number) =>
  client.discipline.findMany({ where: { termId } });
