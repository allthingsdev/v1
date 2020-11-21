import dotenv from 'dotenv';
dotenv.config();
export const db = process.env.DB_URL;
export const db_dev = process.env.DEV_DB_URL;
export const db_test = process.env.TEST_DB_URL;