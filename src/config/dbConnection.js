import mongoose from "mongoose";
// =============================
const uri = process.env.MONGO_URI;

const connectDB = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected Successfully!");
    })
    .catch((err) => {
      console.log("DB Connection Faild:", err);
      process.exit(1);
    });

  mongoose.connection.on("disconnected", () => {
    console.log("DB Disconnected, try to cennected...");
    connectDB();
  });
};

export default connectDB;
