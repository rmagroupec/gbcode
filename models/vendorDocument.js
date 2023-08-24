const mongoose = require("mongoose");

const vendorDocumentSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    vid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "vid",
        ref: "vendor",
    },
    fssailicensenumber: {
        type: String,
    },
    fssaiexpirydate: {
        type: Date,
    },
   
    fssaidoc: {
        type: String,
        // type: mongoose.Schema.Types.BinData,                        //document upload ..

    },
    Pannumber: {
        type: String,
    },
    Panlegalname: {
        type: String,
    },
    Panaddress: {
        type: String,
    },
    Pancarddoc: {
        type: String,
        // type: mongoose.Schema.Types.BinData,                        //document upload ..

    },
        Gstnumber: {
        type: String,
    },
    Gstdoc: {
        type: String,
        // type: mongoose.Schema.Types.BinData,                     //document upload ..

    },
    product_menu_image_url:{
        type:String,
    }
    // druglicensenumber: {
    //     type: String,
    // },
    // drugdoc: {
    //     type: String,
    //     // type: mongoose.Schema.Types.BinData,                        //document upload ..

    // },
});

module.exports = mongoose.model("vendorDocument", vendorDocumentSchema);