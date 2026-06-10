import express from "express";
import { getAllTransactions, getOneTransaction, postTransaction, putTransaction } from "../Controller/Transactions.js";
const router = express.Router();
router.get("/", getAllTransactions);
router.get("/", getOneTransaction);
router.post("/", postTransaction);
router.put("/:id", putTransaction)
export default router;