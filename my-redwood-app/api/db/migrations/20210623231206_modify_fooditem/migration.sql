/*
  Warnings:

  - You are about to drop the `FoodItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FoodItem";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Fooditem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" DECIMAL NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "foodId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,
    FOREIGN KEY ("foodId") REFERENCES "Fooditem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("adminId", "endDate", "foodId", "id", "price", "startDate") SELECT "adminId", "endDate", "foodId", "id", "price", "startDate" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
CREATE UNIQUE INDEX "Menu_foodId_unique" ON "Menu"("foodId");
CREATE UNIQUE INDEX "Menu_adminId_unique" ON "Menu"("adminId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
