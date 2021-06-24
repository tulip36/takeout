-- DropIndex
DROP INDEX "Menu_foodId_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'enabled'
);
INSERT INTO "new_Admin" ("firstName", "id", "lastName", "password", "status", "userName") SELECT "firstName", "id", "lastName", "password", "status", "userName" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
