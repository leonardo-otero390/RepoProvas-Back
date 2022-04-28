import { client } from '../src/database.js';
import clearDatabase from './seeds/clearDatabase.js';

async function main() {
  await clearDatabase();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });
