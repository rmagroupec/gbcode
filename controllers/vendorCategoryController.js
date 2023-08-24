//import the model
const VendorCategory = require("../models/vendorCategory");

//define route handler
const createVendorCategory = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { name, catimage, status, vid, storeid } = req.body;
    //create a new VendorCategory Obj and insert in DB
    const response = await VendorCategory.create({
      name,
      catimage,
      status,
      vid,
      storeid,
    });

    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
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

const deleteVendorCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorCategory.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "VendorCategory deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getVendorCategory = async (req, res) => {
  try {
    const vendorCategories = await VendorCategory.find({});
    res.status(200).json({
      success: true,
      data: vendorCategories,
      message: "get of Data Successfully",
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

const getVendorCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorCategory = await VendorCategory.findById({ _id: id });

    if (!vendorCategory) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorCategory,
      message: `VendorCategory ${id} data fetch successfuly`,
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

const updateVendorCategory = async (req, res) => {
  try {
    const { id, name, catimage, status, vid, storeid } = req.body;
    const vendorCategory = await VendorCategory.findByIdAndUpdate(
      { _id: id },
      { name, catimage, status, vid, storeid },
      { new: true }
    );

    if (!vendorCategory) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorCategory,
      message: `VendorCategory ${id} data updated successfully`,
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

module.exports = {
  createVendorCategory,
  getVendorCategory,
  getVendorCategoryById,
  deleteVendorCategory,
  updateVendorCategory,
};
