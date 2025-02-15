import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dahiqig4o",
  api_key: "576466237538652",
  api_secret: process.env.API_SEC,
});

export default cloudinary;
