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

describe('GET /disciplines', () => {
  it('should return 401', async () => {
    const response = await agent.get('/disciplines');
    expect(response.status).toBe(401);
  });

  it('should return 400', async () => {
    const token = await createValidToken(agent);
    const response = await agent
      .get('/disciplines?name')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(400);
  });

  it('should return 200', async () => {
    const token = await createValidToken(agent);
    const response = await agent
      .get('/disciplines')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(200);
  });

  it('should return 200', async () => {
    const token = await createValidToken(agent);
    const response = await agent
      .get('/disciplines?name=abc')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(200);
  });
});

describe('GET /disciplines/:id/tests', () => {
  let token: string;
  beforeEach(async () => {
    token = await createValidToken(agent);
  });
  it('should return 401', async () => {
    const response = await agent.get('/disciplines/1/tests');
    expect(response.status).toBe(401);
  });
  it('should return 400', async () => {
    const response = await agent
      .get('/disciplines/id/tests')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(400);
  });

  it('should return 200', async () => {
    const response = await agent
      .get('/disciplines/1/tests')
      .set({ authorization: `Bearer ${token}` });
    expect(response.status).toBe(200);
  });
});
