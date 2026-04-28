/*
  Warnings:

  - You are about to drop the column `chakra` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `practice` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `mode` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `practices` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Made the column `goal` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notes` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "chakra",
DROP COLUMN "level",
DROP COLUMN "practice",
ADD COLUMN     "mode" TEXT NOT NULL,
ADD COLUMN     "practices" TEXT NOT NULL,
ALTER COLUMN "goal" SET NOT NULL,
ALTER COLUMN "notes" SET NOT NULL;
