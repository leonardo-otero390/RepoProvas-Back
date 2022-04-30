import supertest from 'supertest';
import app from '../../src/app';
import { createValidToken } from '../factories/sessionFactory';
import * as testFactory from '../factories/testFactory';
import * as utilsDatabase from '../utils/database';

const agent = supertest(app);
beforeAll(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.disconnect();
});

describe('PATCH /tests/:id/views', () => {
  it('should return 401', async () => {
    const res = await agent.patch('/tests/1/views');
    expect(res.status).toBe(401);
  });

  it('should return 400', async () => {
    const token = await createValidToken(agent);
    const res = await agent
      .patch('/tests/id/views')
      .set({ authorization: `Bearer ${token}` });
    expect(res.status).toBe(400);
  });

  it('should return 200', async () => {
    const token = await createValidToken(agent);
    const test = await testFactory.create();
    const res = await agent
      .patch(`/tests/${test.id}/views`)
      .set({ authorization: `Bearer ${token}` });
    expect(res.status).toBe(200);
    expect(res.body.views).toEqual(test.views + 1);
  });
});
