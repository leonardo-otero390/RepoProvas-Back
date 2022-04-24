import { Discipline, Term } from '@prisma/client';
import { httpErrors } from '../errors/HttpError.js';
import * as disciplineRepository from '../repositories/disciplineRepository.js';
import * as termRepository from '../repositories/termRepository.js';

async function groupByTerms(disciplines: Discipline[]) {
  function handleTerms(term:Term) {
    const termDisciplines = disciplines.filter((d) => d.termId === term.id);
    const disciplinesWithoutTermId = termDisciplines.map(
      ({ termId, ...d }) => d
    );
    return {
      ...term,
      disciplines: disciplinesWithoutTermId,
    };
  }
  const terms = await termRepository.findMany();
  if (!terms) throw httpErrors.notFound('There are no terms');
  return terms.map(handleTerms);
}

export async function findGroupByTerms() {
  const disciplines = await disciplineRepository.findMany();
  if (!disciplines) throw httpErrors.notFound('There are no disciplines');
  return groupByTerms(disciplines);
}
