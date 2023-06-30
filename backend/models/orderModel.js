// import connection
import db from "../config/database.js";
  
// Get All Orders
export const getOrders = (result) => {
    db.query("SELECT * FROM order_table", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO order_table SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
  
// Delete Product to Database
export const deleteOrderById = (id, result) => {
    db.query("DELETE FROM order_table WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}