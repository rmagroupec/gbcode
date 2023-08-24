const VendorProduct = require("../models/vendorProductModel");

//define route handler
const createVendorProduct = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { pname, pimage, status, vcatid, stock, price, est_price, pdesc, variable_product } =
      req.body;
    //create a new VendorProduct Obj and insert in DB
    const response = await VendorProduct.create({
      pname,
      pimage,
      status,
      vcatid,
      stock,
      price,
      est_price,
      pdesc,
      variable_product,
    });
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "created successfully",
    });
  } catch (err) {
    console.error(err);
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

const deleteVendorProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorProduct.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "VendorProduct deleted",
    });
  } catch (err) {
    console.error(err);
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

const getVendorProduct = async (req, res) => {
  try {
    const vendorProducts = await VendorProduct.find({});
    res.status(200).json({
      success: true,
      data: vendorProducts,
      message: "get of Data Successfully",
    });
  } catch (err) {
    console.error(err);
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

const getVendorProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorProduct = await VendorProduct.findById({ _id: id });

    if (!vendorProduct) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorProduct,
      message: `VendorProduct ${id} data fetch successfuly`,
    });
  } catch (err) {
    console.error(err);
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

const updateVendorProduct = async (req, res) => {
  try {
    const {
      id,
      pname,
      pimage,
      status,
      vcatid,
      stock,
      price,
      est_price,
      pdesc,
      variable_product
    } = req.body;
    const vendorProduct = await VendorProduct.findByIdAndUpdate(
      { _id: id },
      { pname, pimage, status, vcatid, stock, price, est_price, pdesc, variable_product },
      { new: true }
    );

    if (!vendorProduct) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorProduct,
      message: `VendorProduct ${id} data updated successfully`,
    });
  } catch (err) {
    console.error(err);
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  getVendorProduct,
  getVendorProductById,
  createVendorProduct,
  updateVendorProduct,
  deleteVendorProduct,
};
