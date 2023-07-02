import { getOrdersByUserId } from "../models/orderModel.js";
import { handleResponse } from "./handler.js"; 

export const showOrdersByUserId = (req, res) => {
  getOrdersByUserId(req.params.id, (err, results) => {
    handleResponse(res, err, results);
  });
};