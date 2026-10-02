import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: Number(process.env.PORT || 5000),
  jwtSecret: process.env.JWT_SECRET || 'smart-campus-secret',
  databaseUrl: process.env.DATABASE_URL || 'file:./dev.db',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173'
};
