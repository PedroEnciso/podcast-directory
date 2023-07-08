import asyncHandler from "express-async-handler";

export const episode_list = asyncHandler(async (req, res) => {
  res.send("hello from episodes controller");
});
