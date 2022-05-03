import sgMail from '@sendgrid/mail';
import * as testService from './testService.js';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function createMessageText(testId: number) {
  const { name, teachersDisciplines, categories } =
    await testService.findIncludingAll(testId);
  const { name: teacherName } = teachersDisciplines.teachers;
  const { name: disciplineName } = teachersDisciplines.disciplines;
  const { name: category } = categories;

  return `A seguinte prova foi adicionada: ${teacherName} ${category} ${name} - (${disciplineName})`;
}

export async function send(email: string, testId: number) {
  const msg = await createMessageText(testId);
  const structure = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: 'Sua prova foi enviada com sucesso!',
    text: msg,
  };
  await sgMail.send(structure);
}
