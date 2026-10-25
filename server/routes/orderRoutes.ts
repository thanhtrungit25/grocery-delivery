import express from "express";

import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import { createOrder, getUserOrder, updateOrderStatus, getAllOrders, getOrder, getOrderLocation } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", auth, createOrder);
orderRouter.get("/", auth, getUserOrder);
orderRouter.get("/all", auth, admin, getAllOrders);
orderRouter.get("/:id", auth, getOrder);
orderRouter.put("/:id/status", auth, admin, updateOrderStatus);
orderRouter.get("/:id/location",auth, getOrderLocation);

export default orderRouter;
