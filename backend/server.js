import express from "express";
import cors from "cors";
import episodes from "./api/episodes.route.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/episodes", episodes);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

export default app;
