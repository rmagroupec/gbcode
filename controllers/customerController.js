//import th model
const Customer = require("../models/customer");


//define route handler

const customerRegistration = async (req, res) => {
  try {
    const { phone } = req.body;

    res.status(200).json({
      success: true,
      phone: phone,
      message: "phone entered",
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
}

const optVerfication = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { otp } = req.body;

    res.status(200).json({
      success: true,
      otp: otp,
      message: "otp entered",
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
}

const createCustomerProfile = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { name, email, phone, photo_url, mob_notification } = req.body;
    //create a new Customer Obj and insert in DB
    const response = await Customer.create({
      name,
      email,
      phone,
      photo_url,
      mob_notification,
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



// const createCustomer = async (req, res) => {
//   try {
//     //extract title and desxcription from reauest body
//     const { name, email, phone, photo_url, mob_notification, otp } = req.body;
//     //create a new Customer Obj and insert in DB
//     const response = await Customer.create({
//       name,
//       email,
//       phone,
//       photo_url,
//       mob_notification,
//       otp,
//     });
//     //send a json response with a success flag
//     res.status(200).json({
//       success: true,
//       data: response,
//       message: "Entry Created Successfully",
//     });
//   } catch (err) {
//     console.error(err);
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       data: "internal server error",
//       message: err.message,
//     });
//   }
// };

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "Customer deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json({
      success: true,
      data: customers,
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

const getCustomerById = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById({ _id: id });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: customer,
      message: `Customer ${id} data fetch successfuly`,
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

const updateCustomer = async (req, res) => {
  try {
    const { id, name, email, phone, photo_url, role, mob_notification } =
      req.body;
    const customer = await Customer.findByIdAndUpdate(
      { _id: id },
      { name, email, phone, photo_url, role, mob_notification},
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: customer,
      message: `Customer ${id} data updated successfully`,
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
  updateCustomer,
  createCustomerProfile, 
  // createCustomer,
   deleteCustomer, getCustomer, getCustomerById, customerRegistration, optVerfication
}
