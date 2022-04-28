import { client } from '../../src/database.js';
import populateDisciplines from './populateDisciplines.js';
import populateTeachers from './populateTeachers.js';
import populateTeachersDisciplines from './populateTeachersDisciplines.js';
import populateTests from './populateTests.js';
import upsertCategories from './upsertCategories.js';
import upsertTerms from './upsertTerms.js';

async function main() {
  await upsertCategories();
  await upsertTerms();
  await populateDisciplines();
  await populateTeachers();
  await populateTeachersDisciplines();
  await populateTests();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });
