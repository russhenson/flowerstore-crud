// import connection
import db from "../config/database.js";

// Only retrieves products that are Active
export const getOrdersByUserId = (id, result) => {
    db.query(
      "SELECT p.product_name, p.product_description, p.quantity, p.price FROM products_table p INNER JOIN orders_table o ON p.id = o.product_id WHERE o.user_id = ? AND p.status = 'Active'",
      [id],
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


