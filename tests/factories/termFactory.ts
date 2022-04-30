import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';

export async function createTerm() {
  return client.term.create({
    data: { number: faker.datatype.number() },
  });
}
