import { Router } from "express";
import userRoutes from "./user.routes.js";
import blogRoutes from "./blogs.routes.js";
import departmentRoutes from "./department.routes.js";
//======================================================
const routes = Router();

routes.use("/auth", userRoutes);
routes.use("/blogs", blogRoutes);
routes.use("/department", departmentRoutes);
//======================================================
export default routes;
