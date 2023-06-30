// import connection
import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
  db.query("SELECT * FROM products_table", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single Product
export const getProductById = (id, result) => {
  db.query(
    "SELECT * FROM products_table WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Add Product
export const addProduct = (data, result) => {
  db.query("INSERT INTO products_table SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product
export const updateProductById = (data, id, result) => {
  db.query(
    "UPDATE products_table SET product_name = ?, product_description = ?, quantity = ?, price = ?, updated_at = ? WHERE id = ?",
    [
      data.product_name,
      data.product_description,
      data.quantity,
      data.price,
      new Date(),
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Product to Database
export const deleteProductById = (id, result) => {
  db.query("DELETE FROM products_table WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
