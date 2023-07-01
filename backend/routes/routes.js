// import express
import express from "express";

// import function from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";
import { showUsers, showUserById, updateUser } from "../controllers/user.js";
import { showOrdersByUserId } from "../controllers/order.js";

// init express router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

router.get("/products", showProducts);
router.get("/products/:id", showProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/users", showUsers);
router.get("/users/:id", showUserById);
router.put("/users/:id", updateUser);

router.get("/orders/:id", showOrdersByUserId);

// export default router
export default router;
