import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

export default app;
