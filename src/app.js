import express from "express";
import env from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

// import blogRoutes from "./src/modules/blogs/blogs.routes.js";
// import newsRoutes from "./src/modules/news/news.routes.js";
// import specialiesRoutes from "./src/modules/specialies/specialies.routes.js";
// import doctorRoutes from "./src/modules/doctors/doctor.routes.js";
// import appointmentRoutes from "./src/modules/appointments/appointment.routes.js";
// import departmentRoutes from "./src/modules/departments/department.routes.js";
// import patientRoutes from "./src/modules/patient/patient.routes.js";
// import reportRoutes from "./src/modules/report/report.routes.js";

import { sendSMS } from "./services/sendSMS.js";
import { rmSync } from "fs";
import routes from "./routes/index.js";
// ===========================================

const app = express();
env.config();
const port = 5000;

// connectDB();

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
//============================================
//Routes

app.use("/api/v1", routes);

// app.use("/api/blogs", blogRoutes);
// app.use("/api/news", newsRoutes);
// app.use("/api/specialies", specialiesRoutes);
// app.use("/api/doctors", doctorRoutes);
// app.use("/api/appointments", appointmentRoutes);
// app.use("/api/departments", departmentRoutes);
// app.use("/api/patient", patientRoutes);
// app.use("/api/report", reportRoutes);
// sendSMS('201110498656', 'Your appointment is tomorrow at 10 AM.');

//============================================
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

export { app, port };

// server.listen(port, () => console.log(`Server running on port ${port}`));
