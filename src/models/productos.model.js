const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    category: String
},{
    timestamps: true,
    versionKey: false,
});

module.exports = model("product", productSchema);