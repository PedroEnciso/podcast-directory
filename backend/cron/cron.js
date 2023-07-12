import nodeCron from "node-cron";
import { getEpisodes } from "./getEpisodes.js";
import { save_episodes } from "../controllers/episodeController.js";

export const cronGetEpisodes = nodeCron.schedule(
  "59 59 23 * * *",
  () => {
    logEpisodes();
    const note = `Job executed at ${Date()}`;
    console.log(note);
  },
  {
    scheduled: false,
  }
);

const logEpisodes = async () => {
  const episodes = await getEpisodes();
  save_episodes(episodes);
};
