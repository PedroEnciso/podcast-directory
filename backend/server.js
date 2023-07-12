import express from "express";
import cors from "cors";
import episodes from "./api/episodes.route.js";
import { cronGetEpisodes } from "./cron/cron.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// start cron job
cronGetEpisodes.start();

// routes
app.use("/api/v1/episodes", episodes);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

export default app;
