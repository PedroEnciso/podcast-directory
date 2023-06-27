import express from "express";
import cors from "cors";
import { getEpisodes } from "./getEpisodes.js";

const app = express();
const PORT = 6969;

app.use(cors());

app.get("/", (req, res) => {
  getEpisodes().then((episodes) => {
    res.json(episodes);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// getEpisodes().then(console.log).catch(console.error);
