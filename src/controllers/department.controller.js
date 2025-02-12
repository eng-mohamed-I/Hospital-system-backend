import mongoose from "mongoose";
import { departmentModel } from "../models/department.model.js";
//==============================================================

// Create a new department
const createDepartment = async (req, res) => {
  try {
    const { name, description, doctors } = req.body;

    let foundedDepartment = await departmentModel.findOne({ name: name });
    if (foundedDepartment) {
      return res.status(400).json({ message: "Department already exist" });
    }

    const department = new departmentModel({ name, description, doctors });
    await department.save();

    res.status(201).json({
      message: "Department added successfully",
      department,
    });
  } catch (error) {
    console.error("Error creating department:", error);
    res.status(400).json({ message: error.message });
  }
};

// Get all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentModel.find().populate("doctors");

    if (!departments) {
      return res.status(400).json({ message: "No available Deparment yet" });
    }

    res.status(200).json({ message: "success", departments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a department by ID
const getDepartmentById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const department = await departmentModel.findById(id).populate("doctors");
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json({ message: "success", department });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a department by ID
const updateDepartment = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    let department = await departmentModel.findById(id);

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    const departmentExist = await departmentModel.findOne({ name: name });

    if (departmentExist && departmentExist._id.toString() !== id.toString()) {
      return res.status(400).json({ message: "Department already exist" });
    }

    department = await departmentModel
      .findByIdAndUpdate(id, req.body, {
        new: true,
      })
      .populate("doctors");

    res
      .status(200)
      .json({ message: "department updated successfully", department });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a department by ID
const deleteDepartment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }
  try {
    const department = await departmentModel.findByIdAndDelete(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//==============================================================

export {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
