// import connection
import db from "../config/database.js";

// Only retrieves products that are Active
export const getOrdersByUserId = (id, result) => {
  db.query(
    "SELECT o.id AS order_id, p.id, p.product_name, p.price, p.status FROM products_table p INNER JOIN orders_table o ON p.id = o.product_id WHERE o.user_id = ?",
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


