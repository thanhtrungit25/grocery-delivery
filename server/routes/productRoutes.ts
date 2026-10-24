import express from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import { createProduct, getProducts, getProduct, updateProduct, getFlashDeals } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/flash-deals", getFlashDeals);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", auth, admin, createProduct);
productRouter.put("/:id", auth, admin, updateProduct);

export default productRouter;
