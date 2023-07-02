// Import function from Product Model
import {
  getProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
} from "../models/productModel.js";
import { handleResponse } from "./handler.js"; 

// Get All Products
export const showProducts = (req, res) => {
  getProducts((err, results) => {
    handleResponse(res, err, results);
  });
};

// Get Single Product
export const showProductById = (req, res) => {
  getProductById(req.params.id, (err, results) => {
    handleResponse(res, err, results);
  });
};

// Create New Product
export const createProduct = (req, res) => {
  const data = req.body;
  addProduct(data, (err, results) => {
    handleResponse(res, err, results);
  });
};

// Update Product
export const updateProduct = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateProductById(data, id, (err, results) => {
    handleResponse(res, err, results);
  });
};

// Delete Product
export const deleteProduct = (req, res) => {
  const id = req.params.id;
  deleteProductById(id, (err, results) => {
    handleResponse(res, err, results);
  });
};
