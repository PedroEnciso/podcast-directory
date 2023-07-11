import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const episode_list = asyncHandler(async (req, res) => {
  const allEpisodes = await prisma.episodes.findMany();
  res.json(allEpisodes);
});
