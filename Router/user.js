import express from "express";
import { DELETE, GET, getById, POST, PUT } from "../Controller/User.js";
const router = express.Router();
router.get("/", GET);
router.get("/:id", getById)
router.post("/", POST);
router.put("/:id", PUT);
router.delete("/:id", DELETE);
export default router;