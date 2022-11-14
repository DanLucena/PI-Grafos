-- CreateTable
CREATE TABLE "CoordinatesRelations" (
    "id" SERIAL NOT NULL,
    "baseCoordinateId" INTEGER NOT NULL,
    "destinyCoordinateId" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CoordinatesRelations_pkey" PRIMARY KEY ("id")
);
