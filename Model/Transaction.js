import mongoose from "mongoose";

const transactionModel = new mongoose.Schema({
  catEstimationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  amount_used: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {timestamps: true});

const transactions = mongoose.model("transaction", transactionModel);
export default transactions;