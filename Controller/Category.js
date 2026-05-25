import { validator } from "../Validator/Cat.validator.js";
import category from "../Model/Category.js";

export const Get = async (req, res) => {
  try {
    const getCategory = await category
      .find()
      .populate("userId", "fullName, email");
    res.json(getCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOneCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneCategory = await category.findById(id);
    if (!getOneCategory) {
      return res.status(404).json({
        message: "category not found",
      });
    }
    res.json(getOneCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const POST = async (req, res) => {
  const { error } = validator.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  try {
    const Category = new category(req.body);
    const newCategory = await Category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const PUT = async (req, res) => {
  const { id } = req.params;
  const { error } = validator.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  try {
    const updatingCat = await category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatingCat) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.json(updatingCat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.body;

  try {
    const deletingCat = await category.findByIdAndDelete(id);
    if (!deletingCat) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
