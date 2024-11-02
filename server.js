import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import routers
import authRoute from "./routes/auth.route.js";
import mongoose, { mongo } from "mongoose";

dotenv.config();
const app = express();
app.use(express.json()); // enables to take json data from api
app.use(cors()); // enables to communicate to frontend

// connecting to mongodb
mongoose
  .connect(process.env.MONGO_API)
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.error(`error to connecting mongodb ::: ${err}`);
  });

// api routing
app.get("/", (req, res) => {
  res.status(201).json({ ok: true, message: "server started" });
});
app.use("/api/auth", authRoute);

// server starting
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
