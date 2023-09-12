-- CreateTable
CREATE TABLE "WhiteNoise" (
    "id" SERIAL NOT NULL,
    "whitenoiseName" TEXT NOT NULL,
    "whitenoiseURL" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhiteNoise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToWhiteNoise" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWhiteNoise_AB_unique" ON "_UserToWhiteNoise"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWhiteNoise_B_index" ON "_UserToWhiteNoise"("B");

-- AddForeignKey
ALTER TABLE "_UserToWhiteNoise" ADD CONSTRAINT "_UserToWhiteNoise_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWhiteNoise" ADD CONSTRAINT "_UserToWhiteNoise_B_fkey" FOREIGN KEY ("B") REFERENCES "WhiteNoise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
