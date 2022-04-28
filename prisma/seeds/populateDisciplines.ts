import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';

export default async function populateDisciplines() {
  const terms = await client.term.findMany();
  const disciplines = [];

  for (let i = 1; i <= 10; i += 1) {
    const randomTermIndex = faker.datatype.number({
      min: 1,
      max: terms.length - 1,
    });
    disciplines.push({
      name: faker.name.jobTitle(),
      termId: terms[randomTermIndex].id,
    });
  }
  await client.discipline.createMany({ data: disciplines });
}
