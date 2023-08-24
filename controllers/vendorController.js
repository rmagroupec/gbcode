const Vendor = require("../models/vendor");

const createVendor = async (req, res) => {
  try {
    // extract title and description from request body
    const {
      name,
      email,
      password,
      phone,
      // photo_url,
      // pancarddoc,
      // pannumber,
      // legalname,
      // gstnumber,
      // turnover,
      // gstdoc,
    } = req.body;
    // create a new Vendor Obj and insert in DB
    const response = await Vendor.create({
      name,
      email,
      password,
      phone,
      // photo_url,
      // pancarddoc,
      // pannumber,
      // legalname,
      // gstnumber,
      // turnover,
      // gstdoc,
    });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Vendor Created Successfully",
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

const updateVendor = async (req, res) => {
  try {
    const {
      id,
      name,
      email,
      phone,
      // photo_url,
      // status,
      // pancarddoc,
      // pannumber,
      // legalname,
      // gstnumber,
      // turnover,
      // gstdoc,
    } = req.body;
    const vendor = await Vendor.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        phone,
        // photo_url,
        // status,
        // pancarddoc,
        // pannumber,
        // legalname,
        // gstnumber,
        // turnover,
        // gstdoc,
      },
      { new: true }
    );

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendor,
      message: `Vendor ${id} data updated successfully`,
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

const getVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    res.status(200).json({
      success: true,
      data: vendors,
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

const getVendorById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findById({ _id: id });

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendor,
      message: `Vendor ${id} data fetch successfuly`,
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

const deleteVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Vendor deleted",
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
  getVendor,
  getVendorById,
  updateVendor,
  createVendor,
  deleteVendor,
};
