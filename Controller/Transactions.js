import { validator } from "../Validator/Transaction.js";
import Transaction from "../Model/Transaction.js";

export const getAllTransactions = async (req, res) => {
  try {
    const getAllTransactions = await Transaction.find();
    res.json(getAllTransactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOneTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const getATransation = await Transaction.findById(id);
    if (!getATransation) {
      return res.status(404).json({
        message: "transaction not found",
      });
    }
    res.json(getATransation);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const postTransaction = async (req, res) => {
  const { error } = validator.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  try {
    const postATransaction = new Transaction(req.body);
    const newPost = await postATransaction.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const putTransaction = async (req, res) => {
  const { id } = req.params;
  const { error } = validator.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  try {
    const updateTransaction = await Transaction.findOneAndUpdate(id);
    if (!updateTransaction) {
      return res.status(404).json({
        message: "category not found",
      });
    }

    res.json(updateTransaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
