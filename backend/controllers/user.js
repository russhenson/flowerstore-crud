import {
  getUsers,
  getUserById,
  updateUserById,
} from "../models/userModel.js";
import { handleResponse } from "./handler.js"; 

export const showUsers = (req, res) => {
  getUsers((err, results) => {
    handleResponse(res, err, results);
  });
};

export const showUserById = (req, res) => {
  getUserById(req.params.id, (err, results) => {
    handleResponse(res, err, results);
  });
};

export const updateUser = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateUserById(data, id, (err, results) => {
    handleResponse(res, err, results);
  });
};