/*
  Warnings:

  - The primary key for the `Chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SavedPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserChat` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `ChatSeen` DROP FOREIGN KEY `ChatSeen_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `PostDetail` DROP FOREIGN KEY `PostDetail_postId_fkey`;

-- DropForeignKey
ALTER TABLE `PostImage` DROP FOREIGN KEY `PostImage_postId_fkey`;

-- DropForeignKey
ALTER TABLE `SavedPost` DROP FOREIGN KEY `SavedPost_postId_fkey`;

-- DropForeignKey
ALTER TABLE `UserChat` DROP FOREIGN KEY `UserChat_chatId_fkey`;

-- DropIndex
DROP INDEX `ChatSeen_chatId_fkey` ON `ChatSeen`;

-- DropIndex
DROP INDEX `Message_chatId_fkey` ON `Message`;

-- DropIndex
DROP INDEX `PostImage_postId_fkey` ON `PostImage`;

-- DropIndex
DROP INDEX `SavedPost_postId_fkey` ON `SavedPost`;

-- DropIndex
DROP INDEX `UserChat_chatId_fkey` ON `UserChat`;

-- AlterTable
ALTER TABLE `Chat` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ChatSeen` MODIFY `chatId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Message` MODIFY `chatId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Post` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `PostDetail` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `postId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `PostImage` MODIFY `postId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SavedPost` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `postId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `UserChat` DROP PRIMARY KEY,
    MODIFY `chatId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userId`, `chatId`);

-- AddForeignKey
ALTER TABLE `PostImage` ADD CONSTRAINT `PostImage_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostDetail` ADD CONSTRAINT `PostDetail_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SavedPost` ADD CONSTRAINT `SavedPost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChat` ADD CONSTRAINT `UserChat_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatSeen` ADD CONSTRAINT `ChatSeen_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
