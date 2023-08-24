const { model } = require("mongoose");
const MainCategory = require("../models/mainCategoryModel");
//Get category

const getMainCategory = async (req, res) => {
  try {
    const mainCategories = await MainCategory.find({});
    res.status(200).json({
      success: true,
      data: mainCategories,
      message: "Get all main categories successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
//Get Category by id
const getMainCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const mainCategory = await MainCategory.findById({ _id: id });

    if (!mainCategory) {
      return res.status(404).json({
        success: false,
        message: "No main category found with ID",
      });
    }

    res.status(200).json({
      success: true,
      data: mainCategory,
      message: `Main category ${id} data fetch successfully`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

//Post cotegory
const createMainCategory = async (req, res) => {
  try {
    //extract name, photo, and photoname from request body
    const { name, photo, photoname, gst, point, commission } = req.body;
    //create a new MainCategory object and insert in DB
    const response = await MainCategory.create({ name, photo, photoname, gst, point, commission });
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "creatd successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

//Update Category

const updateMainCategory = async (req, res) => {
  try {
    const { id, name, photo, photoname, gst, point, commission } = req.body;
    const mainCategory = await MainCategory.findByIdAndUpdate(
      { _id: id },
      { name, photo, photoname, gst, point, commission },
      { new: true }
    );

    if (!mainCategory) {
      return res.status(404).json({
        success: false,
        message: "No main category found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: mainCategory,
      message: `Main category ${id} data updated successfully`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
///Delete api
const deleteMainCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await MainCategory.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Main category deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

module.exports = {
  getMainCategory,
  getMainCategoryById,
  updateMainCategory,
  createMainCategory,
  deleteMainCategory,
};
