import mongoose from "mongoose";
const url = "mongodb+srv://mohamedyasiiin1:ii94r6NDPwr5fsk5@learning.58c7u.mongodb.net/?retryWrites=true&w=majority&appName=hospital";

// const uri = "mongodb+srv://eslam:eslam@hospital.q8ghh.mongodb.net/?retryWrites=true&w=majority&appName=test";
// const uri = "mongodb://localhost:27017/backend-graduation-project";
export const connectionDB = mongoose
  .connect(url)
  .then(() => {
    console.log("DB connected Successfully 👋");
  })
  .catch((err) => {
    console.log("connected failed", err);
  });
