-- AlterTable
ALTER TABLE "OrderShipping" ALTER COLUMN "fee" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "ShippingMethod" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provinceFee" DOUBLE PRECISION NOT NULL,
    "cityFee" DOUBLE PRECISION NOT NULL,
    "estimateDaysMin" INTEGER NOT NULL,
    "estimateDaysMax" INTEGER NOT NULL,

    CONSTRAINT "ShippingMethod_pkey" PRIMARY KEY ("id")
);
