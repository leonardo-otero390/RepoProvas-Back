import supertest from 'supertest';
import app from '../../src/app';
import { createValidToken } from '../factories/sessionFactory';
import * as utilsDatabase from '../utils/database';

const agent = supertest(app);
beforeAll(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.disconnect();
});

describe('GET /teachers', () => {
  it('should return 401', async () => {
    const response = await agent.get('/teachers');
    expect(response.status).toBe(401);
  });

  it('should return 200', async () => {
    const token = await createValidToken(agent);
    const response = await agent
      .get('/teachers')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(200);
  });
});
