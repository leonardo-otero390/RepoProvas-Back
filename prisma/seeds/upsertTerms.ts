import { client } from '../../src/database.js';

export default async function upsertTerms() {
  const upsertObjects = [];
  for (let i = 1; i <= 10; i += 1) {
    upsertObjects.push({
      where: { number: i },
      update: {},
      create: { number: i },
    });
  }
  await client.term.upsert(upsertObjects[0]);
  await client.term.upsert(upsertObjects[1]);
  await client.term.upsert(upsertObjects[2]);
  await client.term.upsert(upsertObjects[3]);
  await client.term.upsert(upsertObjects[4]);
  await client.term.upsert(upsertObjects[5]);
  await client.term.upsert(upsertObjects[6]);
  await client.term.upsert(upsertObjects[7]);
  await client.term.upsert(upsertObjects[8]);
  await client.term.upsert(upsertObjects[9]);
}
