import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRout from "./Router/user.js"
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/users", userRout);
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Connection error:", err));

  app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});