/*
  Warnings:

  - Added the required column `enabled` to the `Bike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bike" ADD COLUMN     "enabled" BOOLEAN NOT NULL;
