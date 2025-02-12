import { specialiesModel } from "../models/specialtise.model.js";
//======================================================

const createSpecialies = async (req, res, next) => {
  const newData = req.body;

  const specialies = await specialiesModel.insertMany(newData);

  if (!specialies) res.status(400).json({ message: "Faild" });

  res.status(201).json({ message: "Added", specialies });
};
const getAllSpecialies = async (req, res, next) => {
  const specialies = await specialiesModel.find();

  if (!specialies)
    res.status(404).json({ message: "Didn't Found Any specialies" });

  res.status(201).json({ message: "news:", specialies });
};
const getSingleSpecialies = async (req, res, next) => {
  const { id } = req.params;

  const speciality = await specialiesModel.findById(id);

  if (!speciality) res.status(404).json({ message: "Didn't Find speciality" });

  res.status(200).json({ message: "Done", speciality });
};
//======================================================
export { createSpecialies, getAllSpecialies, getSingleSpecialies };
