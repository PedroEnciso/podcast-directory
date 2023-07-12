import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const episode_list = asyncHandler(async (req, res) => {
  const allEpisodes = await prisma.episodes.findMany();
  res.json(allEpisodes);
});

// this is not a function called by a router, so call function normally
export const save_episodes = async (episodes) => {
  // delete all episode data in the db
  await prisma.episodes.deleteMany({});
  console.log("all documents have been deleted");

  // post newly fetched episodes to db
  for (let i = 0; i < episodes.length; i++) {
    try {
      const addedEpisode = await prisma.episodes.create({ data: episodes[i] });
      console.log(`Just added ${addedEpisode.episodeTitle} to the db`);
    } catch (err) {
      console.error(err);
    }
  }
};
