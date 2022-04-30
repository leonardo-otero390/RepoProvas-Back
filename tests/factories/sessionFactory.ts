import supertest from 'supertest';
import * as userFactory from './userFactory';

export async function createValidToken(
  agent: supertest.SuperTest<supertest.Test>
) {
  const user = await userFactory.create();
  const response = await agent.post('/login').send(user);
  return response.body.token;
}
