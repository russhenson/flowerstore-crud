import {
  getUsers,
  getUserById,
  updateUserById,
} from "../models/userModel.js";

export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showUserById = (req, res) => {
  getUserById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateUser = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateUserById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};