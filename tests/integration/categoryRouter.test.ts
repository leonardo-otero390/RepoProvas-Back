import supertest from 'supertest';
import app from '../../src/app';
import * as utilsDatabase from '../utils/database';
import * as userFactory from '../factories/userFactory';

const agent = supertest(app);
let token: string;
beforeAll(async () => {
  await utilsDatabase.clearDatabase();
  const user = await userFactory.createUser();
  const response = await agent.post('/sign-in').send(user);
  token = response.body.token;
});

afterAll(async () => {
  await utilsDatabase.clearDatabase();
  await utilsDatabase.disconnect();
});

describe('GET /categories', () => {
  it('should return 401', async () => {
    const response = await agent.get('/categories');
    expect(response.status).toBe(401);
  });

  it('should return 200', async () => {
    const response = await agent
      .get('/categories')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(200);
  });
});
