import { Test } from '@prisma/client';

export type NewTest = Omit<Test, 'id' | 'views'>;

export interface NewTestReq extends Omit<NewTest, 'teacherDisciplineId'> {
  teacherId: number;
  disciplineId: number;
}
