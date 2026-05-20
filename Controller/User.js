import User from "../Model/User.js"
import { validatorUser } from "../Validator/user.validator.js";
export const GET = async (req, res) => {
  try {
    const getData = await User.find();

    res.json(getData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const getOneData = await User.findById(id);

    if (!getOneData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(getOneData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const POST = async (req, res) => {
  const { error } = validatorUser.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  try {
    const newUser = new User(req.body);

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const PUT = async (req, res) => {
  const { id } = req.params;
  const { error } = validatorUser.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  try {
    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(updateData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteData = await User.findByIdAndDelete(id);

    if (!deleteData) {
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
