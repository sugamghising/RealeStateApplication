import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client';
// import mariadb from "mariadb";

// const DATABASE_URL = process.env.DATABASE_URL;
// if (!DATABASE_URL) {
//     throw new Error("NO database URL");
// }
// const pool = mariadb.createPool(DATABASE_URL);

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
    port: 3306,
    connectionLimit: 5,
    connectTimeout: 20000
});
const prisma = new PrismaClient({ adapter });

export { prisma }