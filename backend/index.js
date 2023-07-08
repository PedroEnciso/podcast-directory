import app from "./server.js";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;

const prisma = new PrismaClient();

const main = async () => {
  const allEpisodes = await prisma.episodes.findMany();
  console.log(allEpisodes);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
