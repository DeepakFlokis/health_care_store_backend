const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    services: {
        type: Array,
        required: true,
    },
    equipment: {
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model("Product", productSchema);