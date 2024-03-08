import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";
config();

export const prisma = new PrismaClient();

export const PORT = process.env.PORT || 3001;
export const SECRET = process.env.SECRET;
