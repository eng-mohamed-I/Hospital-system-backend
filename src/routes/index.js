import { Router } from "express";
import userRoutes from "./user.routes.js";
import blogRoutes from "./blogs.routes.js";
//================================
const routes = Router();

routes.use("/auth", userRoutes);
routes.use("/blogs", blogRoutes);

export default routes;
