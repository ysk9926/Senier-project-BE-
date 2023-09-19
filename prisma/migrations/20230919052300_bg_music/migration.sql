-- CreateTable
CREATE TABLE "BackgroundMusic" (
    "id" SERIAL NOT NULL,
    "bgMusicName" TEXT NOT NULL,
    "bgMusicURL" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BackgroundMusic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BackgroundMusic_bgMusicName_key" ON "BackgroundMusic"("bgMusicName");
