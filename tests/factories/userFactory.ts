import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { client } from '../../src/database.js';

export async function createUser() {
  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  const hashedPassword = bcrypt.hashSync(user.password, 12);

  await client.user.create({
    data: { email: user.email, password: hashedPassword },
  });
  return user;
}
