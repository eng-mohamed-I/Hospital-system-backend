import { Router } from "express";
import {
  createSpecialies,
  getAllSpecialies,
  getSingleSpecialies,
} from "./controllers/specialies.controller.js";
//======================================================
const specialiesRoutes = Router();

specialiesRoutes.post("/", createSpecialies);
specialiesRoutes.get("/", getAllSpecialies);
specialiesRoutes.get("/:id", getSingleSpecialies);
//======================================================
export default specialiesRoutes;
