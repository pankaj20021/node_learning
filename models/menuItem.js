const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price : {
        type: Number,
        required:true
    },
    taste : {
        type : String,
        enum: ["Sweet", "spicy", "sour"],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false 
    },
    ingridients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default:0,
    }
})

const menuItem = mongoose.model('menuItem', menuItemsSchema);
module.exports = menuItem