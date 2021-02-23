/*
  Warnings:

  - You are about to drop the column `Prince` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `Price` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "MenuId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Price" REAL NOT NULL,
    "StartDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "EndDate" DATETIME NOT NULL,
    "FoodId" INTEGER NOT NULL,
    FOREIGN KEY ("FoodId") REFERENCES "FoodItem" ("FoodId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("MenuId", "StartDate", "EndDate", "FoodId") SELECT "MenuId", "StartDate", "EndDate", "FoodId" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
