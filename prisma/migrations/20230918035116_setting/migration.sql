/*
  Warnings:

  - A unique constraint covering the columns `[whitenoiseName]` on the table `WhiteNoise` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WhiteNoise_whitenoiseName_key" ON "WhiteNoise"("whitenoiseName");
