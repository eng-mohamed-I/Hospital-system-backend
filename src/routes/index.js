import { Router } from "express";
import userRoutes from "./user.routes.js";
import blogRoutes from "./blogs.routes.js";
import departmentRoutes from "./department.routes.js";
import patientRoutes from "./patient.routes.js";
//======================================================
const routes = Router();

routes.use("/user", userRoutes);
routes.use("/patient", patientRoutes);
routes.use("/blogs", blogRoutes);
routes.use("/department", departmentRoutes);
//======================================================
export default routes;
