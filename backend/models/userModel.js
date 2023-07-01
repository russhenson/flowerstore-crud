// import connection
import db from "../config/database.js";

// Get All Users
export const getUsers = (result) => {
  db.query("SELECT * FROM users_table", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single User
export const getUserById = (id, result) => {
  db.query(
    "SELECT * FROM users_table WHERE id = ?",
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

// Update User
export const updateUserById = (data, id, result) => {
  db.query(
    "UPDATE users_table SET first_name = ?, last_name = ?, email_address = ?, mobile_number = ? WHERE id = ?",
    [data.first_name, data.last_name, data.email_address, data.mobile_address, id],
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
