import express from "express";
import { Get, getOneCategory, POST, PUT, DELETE   } from "../Controller/Category.js";
const router = express.Router();

router.get("/", Get);
router.get("/:id", getOneCategory);
router.post("/", POST);
router.put("/:id", PUT);
router.delete("/:id", DELETE);
export default router;