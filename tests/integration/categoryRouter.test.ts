import supertest from 'supertest';
import app from '../../src/app';
import { createValidToken } from '../factories/sessionFactory';
import * as utilsDatabase from '../utils/database';

const agent = supertest(app);
let token: string;
beforeAll(async () => {
  await utilsDatabase.clearDatabase();
});

beforeEach(async () => {
  token = await createValidToken(agent);
});

afterAll(async () => {
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
