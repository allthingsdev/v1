import dotenv from 'dotenv';
dotenv.config();
export const dbconn = process.env.CONNECTION_STRING;