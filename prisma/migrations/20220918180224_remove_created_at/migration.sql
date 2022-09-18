/*
  Warnings:

  - You are about to drop the column `created_at` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `teachers_disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `teachers_disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `terms` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `terms` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "teachers_disciplines" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "terms" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "updated_at";
