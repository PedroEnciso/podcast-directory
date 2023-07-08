import express from "express";
import { episode_list } from "../controllers/episodeController.js";
const router = express.Router();

router.get("/", episode_list);

export default router;
