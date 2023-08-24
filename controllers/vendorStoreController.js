// const { model } = require("mongoose");
const VendorStore = require("../models/vendorStore");

const updateVendorStore = async (req, res) => {
  try {
    const {
      id, vid, storename, address, city, state, streetNumber, zipcode, CountryCode, latitude, longitude, storeimage, storeopeningtime, storeclosingtime, sunday, monday, tuesday, wednesday, thursday, friday, saturday, category, storeManager, services
    } = req.body;
    const vendorStore = await VendorStore.findByIdAndUpdate(
      { _id: id },
      {
        vid, storename, address, city, state, streetNumber, zipcode, CountryCode, latitude, longitude, storeimage, storeopeningtime, storeclosingtime, sunday, monday, tuesday, wednesday, thursday, friday, saturday, category, storeManager, services
      },
      { new: true }
    );

    if (!vendorStore) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorStore,
      message: `Vendor Store ${id} data updated successfully`,
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

const getVendorStore = async (req, res) => {
  try {
    const vendors = await VendorStore.find({});
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

const getVendorStoreById = async (req, res) => {
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

const deleteVendorStore = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorStore.findByIdAndDelete(id);
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

const createVendorStore = async (req, res) => {
  try {
    // extract title and description from request body
    const {
      vid, storename, address, city, state, streetNumber, zipcode, CountryCode, latitude, longitude, storeimage, storeopeningtime, storeclosingtime, sunday, monday, tuesday, wednesday, thursday, friday, saturday, category, storeManager, services
    } = req.body;
    // create a new VendorStore Obj and insert in DB
    const response = await VendorStore.create({
      vid, storename, address, city, state, streetNumber, zipcode, CountryCode, latitude, longitude, storeimage, storeopeningtime, storeclosingtime, sunday, monday, tuesday, wednesday, thursday, friday, saturday, category, storeManager, services
    });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Store Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "server error",
      message: err.message,
    });
  }
};

module.exports = {
  getVendorStore,
  getVendorStoreById,
  createVendorStore,
  updateVendorStore,
  deleteVendorStore,
};
