import { client } from '../../src/database.js';

export default async function upsertCategories() {
  await client.category.upsert({
    where: { name: 'P1' },
    update: {},
    create: { name: 'P1' },
  });
  await client.category.upsert({
    where: { name: 'P2' },
    update: {},
    create: { name: 'P2' },
  });
  await client.category.upsert({
    where: { name: 'P3' },
    update: {},
    create: { name: 'P3' },
  });
  await client.category.upsert({
    where: { name: 'PO' },
    update: {},
    create: { name: 'PO' },
  });
}
