import faker from '@faker-js/faker';
import { client } from '../database.js';

export async function dropTables() {
  await client.test.deleteMany({});
  await client.category.deleteMany({});
  await client.teachersDiscipline.deleteMany({});
  await client.teacher.deleteMany({});
  await client.discipline.deleteMany({});
  await client.term.deleteMany({});
}

export async function populateCategories() {
  const categories = [
    { name: 'P1' },
    { name: 'P2' },
    { name: 'P3' },
    { name: 'PO' },
  ];
  await client.category.createMany({ data: categories });
}

export async function populateTeachers() {
  const teachers = [];
  for (let i = 0; i < 10; i += 1) {
    teachers.push({
      name: faker.name.findName(),
    });
  }
  await client.teacher.createMany({ data: teachers });
}

export async function populateTerms() {
  const terms = [];
  for (let i = 1; i <= 10; i += 1) {
    terms.push({
      number: i,
    });
  }
  await client.term.createMany({ data: terms });
}

export async function populateDisciplines() {
  const terms = await client.term.findMany();
  const disciplines = [];

  for (let i = 1; i <= 10; i += 1) {
    const randomTermIndex = Math.floor(Math.random() * terms.length - 1);
    disciplines.push({
      name: faker.name.jobTitle(),
      termId: terms[randomTermIndex].id,
    });
  }
  await client.discipline.createMany({ data: disciplines });
}

export async function populateTeachersDisciplines() {
  const teachers = await client.teacher.findMany();
  const disciplines = await client.discipline.findMany();
  const teachersDisciplines = [];

  for (let i = 0; i < 10; i += 1) {
    const randomTeacherIndex = Math.floor(Math.random() * teachers.length);
    const randomDisciplineIndex = Math.floor(
      Math.random() * disciplines.length
    );
    teachersDisciplines.push({
      teacherId: teachers[randomTeacherIndex].id,
      disciplineId: disciplines[randomDisciplineIndex].id,
    });
  }

  await client.teachersDiscipline.createMany({ data: teachersDisciplines });
}

export async function populateTests() {
  await populateCategories();
  await populateTerms();
  await populateDisciplines();
  await populateTeachers();
  await populateTeachersDisciplines();

  const teachersDisciplines = await client.teachersDiscipline.findMany();
  const categories = await client.category.findMany();
  const tests = [];

  for (let i = 0; i < 10; i += 1) {
    const randomTeacherDisciplineIndex = Math.floor(
      Math.random() * teachersDisciplines.length
    );
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    tests.push({
      name: faker.name.jobTitle(),
      pdfUrl: faker.image.imageUrl(),
      categoryId: categories[randomCategoryIndex].id,
      teacherDisciplineId: teachersDisciplines[randomTeacherDisciplineIndex].id,
    });
  }

  await client.test.createMany({ data: tests });
}
