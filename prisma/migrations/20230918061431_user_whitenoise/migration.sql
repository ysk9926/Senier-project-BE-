/*
  Warnings:

  - You are about to drop the column `isLocked` on the `WhiteNoise` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `WhiteNoise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "WhiteNoise" DROP CONSTRAINT "WhiteNoise_userID_fkey";

-- AlterTable
ALTER TABLE "WhiteNoise" DROP COLUMN "isLocked",
DROP COLUMN "userID";

-- CreateTable
CREATE TABLE "UserWhiteNoise" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "whiteNoiseId" INTEGER NOT NULL,
    "isLocked" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWhiteNoise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserWhiteNoise" ADD CONSTRAINT "UserWhiteNoise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWhiteNoise" ADD CONSTRAINT "UserWhiteNoise_whiteNoiseId_fkey" FOREIGN KEY ("whiteNoiseId") REFERENCES "WhiteNoise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
