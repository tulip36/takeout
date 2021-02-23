/*
  Warnings:

  - The migration will change the primary key for the `Category` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CategoryId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `Nmae` on the `Category` table. All the data in the column will be lost.
  - The migration will change the primary key for the `FoodItem` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `FoodId` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `UnitPrice` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `CategoryId` on the `FoodItem` table. All the data in the column will be lost.
  - The migration will change the primary key for the `Menu` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `MenuId` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `StartDate` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `EndDate` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `FoodId` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `nmae` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "nmae" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "categoryId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nmae" TEXT NOT NULL
);
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_FoodItem" (
    "foodId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "unitPrice" REAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    FOREIGN KEY ("categoryId") REFERENCES "Category" ("categoryId") ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE "FoodItem";
ALTER TABLE "new_FoodItem" RENAME TO "FoodItem";
CREATE TABLE "new_Menu" (
    "menuId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL,
    "startDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" DATETIME NOT NULL,
    "foodId" INTEGER NOT NULL,
    FOREIGN KEY ("foodId") REFERENCES "FoodItem" ("foodId") ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
