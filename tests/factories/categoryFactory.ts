import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';

export async function create() {
  return client.category.create({
    data: { name: `P${faker.datatype.number(3)}` },
  });
}
