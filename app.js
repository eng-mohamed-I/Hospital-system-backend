import express from "express";
import http from "http";
import { Server } from "socket.io";
import userRoutes from "./src/modules/user/user.routes.js";
import cors from "cors";
import blogRoutes from "./src/modules/blogs/blogs.routes.js";
import newsRoutes from "./src/modules/news/news.routes.js";
import specialiesRoutes from "./src/modules/specialies/specialies.routes.js";
import doctorRoutes from "./src/modules/doctors/doctor.routes.js";
import appointmentRoutes from "./src/modules/appointments/appointment.routes.js";
import departmentRoutes from "./src/modules/departments/department.routes.js";
import patientRoutes from "./src/modules/patient/patient.routes.js";
import { sendSMS } from "./src/services/sendSMS.js";
import reportRoutes from "./src/modules/report/report.routes.js";
import { rmSync } from "fs";
import env from "dotenv";
import connectDB from "./src/config/dbConnection.js";
// ===========================================

const app = express();
env.config();
const port = 5000;

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
//============================================
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/specialies", specialiesRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/report", reportRoutes);

// app.get("/test", (req, res) => {
//   return res.status(200).json({ message: "work" });
// });

app.post("/test/upload");

// sendSMS('201110498656', 'Your appointment is tomorrow at 10 AM.');

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

export { app, io, port };

server.listen(port, () => console.log(`Server running on port ${port}`));
