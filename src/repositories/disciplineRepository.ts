import { client } from '../database.js';

export const findMany = async () => client.discipline.findMany();
