import { getOrdersByUserId } from "../models/orderModel.js";

export const showOrdersByUserId = (req, res) => {
  getOrdersByUserId(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};