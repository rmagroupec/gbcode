const mongoose = require("mongoose");

const mainCategorySchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    photo: {
        type: String,
    },
    photoname: {
        type: String,
    },
    gst:{
        type:String,
    },
    point:{
        type:String,
    },
    commission:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("mainCategoryModel", mainCategorySchema);