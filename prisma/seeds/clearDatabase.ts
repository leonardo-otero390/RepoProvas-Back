import { client } from '../../src/database.js';

async function truncateUsers() {
  await client.$executeRawUnsafe('TRUNCATE TABLE users');
}

async function truncateTeachersDisciplines() {
  await client.$executeRawUnsafe('TRUNCATE TABLE "teachersDisciplines" CASCADE');
}

async function truncateDisciplines() {
  await client.$executeRawUnsafe('TRUNCATE TABLE disciplines CASCADE');
}

async function truncateTeachers() {
  await client.$executeRawUnsafe('TRUNCATE TABLE teachers CASCADE');
}

async function truncateTerms() {
  await client.$executeRawUnsafe('TRUNCATE TABLE terms CASCADE');
}

async function truncateTests() {
  await client.$executeRawUnsafe('TRUNCATE TABLE tests CASCADE');
}

async function truncateCategories() {
  await client.$executeRawUnsafe('TRUNCATE TABLE categories CASCADE');
}

export default async function clearDatabase() {
  await truncateUsers();
  await truncateTests();
  await truncateCategories();
  await truncateTeachersDisciplines();
  await truncateDisciplines();
  await truncateTeachers();
  await truncateTerms();
}
