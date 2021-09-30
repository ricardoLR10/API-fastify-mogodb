const Product = require('../models/productos.model');


const getProducts = async (request, reply) => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        reply.code(500).send(error);
    }
}

const getProductById = async (request, reply) => {
    try {
        const product = await Product.findById(request.params.id);
        reply.code(200).send(product);
    } catch (error) {
        reply.code(500).send(error);
    }
}

const setProduct = async (request, reply) => {
    try {
        const newProducto = new Product(request.body);
        await newProducto.save();
        reply.code(201).send(newProducto);
    } catch (error) {
        reply.code(500).send(error);
    }
}

const deleteProduct = async (request, reply) => {
    try {
        await Product.findByIdAndDelete(request.params.id);
        reply.code(204).send();
    } catch (error) {
        reply.code(500).send(error);
    }
}

const updateProduct = async (request, reply) => {
    try {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });
        reply.code(200).send(product);
    } catch (error) {
        reply.code(500).send(error);
    }
}

module.exports = {
    getProducts,
    getProductById,
    setProduct,
    deleteProduct,
    updateProduct
}