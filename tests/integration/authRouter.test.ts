import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../src/app';
import * as utilsDatabase from '../utils/database';
import * as userFactory from '../factories/userFactory';

const agent = supertest(app);
beforeAll(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.clearDatabase();
  await utilsDatabase.disconnect();
});

describe('POST /sign-up', () => {
  it('should return 400', async () => {
    const response = await agent
      .post('/sign-up')
      .send({ email: faker.random.words(), password: faker.random.word() });
    expect(response.status).toBe(400);
  });

  it('should return 201', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const response = await agent.post('/sign-up').send(user);
    expect(response.status).toBe(201);
    expect(await utilsDatabase.findUser(user.email)).toBeTruthy();
  });

  it('should return 409', async () => {
    const user = await userFactory.createUser();
    const response = await agent.post('/sign-up').send(user);
    expect(response.status).toBe(409);
  });
});

describe('POST /login', () => {
  it('should return 400', async () => {
    const response = await agent.post('/login');
    expect(response.status).toBe(400);
  });

  it('should return 401', async () => {
    const user = await userFactory.createUser();
    const response = await agent
      .post('/login')
      .send({ email: user.email, password: faker.random.word() });
    expect(response.status).toBe(401);
  });

  it('should return 200', async () => {
    const user = await userFactory.createUser();
    const response = await agent.post('/login').send(user);
    expect(response.status).toBe(200);
    expect(response.body.token).toBeTruthy();
  });
});
