import mongoose from "mongoose";
import env from "dotenv";
env.config();

const url = process.env.DATA_BASE_URL;

export const connectionDB = mongoose
  .connect(url)
  .then(() => {
    console.log("DB connected Successfully");
  })
  .catch((err) => {
    console.log("connected failed", err);
  });
