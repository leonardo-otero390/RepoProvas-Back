/*
  Warnings:

  - You are about to drop the `teatchersDisciplines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teatchersDisciplines" DROP CONSTRAINT "teatchersDisciplines_fk1";

-- DropForeignKey
ALTER TABLE "teatchersDisciplines" DROP CONSTRAINT "teatchersDisciplines_fk0";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_fk1";

-- DropTable
DROP TABLE "teatchersDisciplines";

-- CreateTable
CREATE TABLE "teachersDisciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teachersDisciplines_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_fk1" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_fk0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
