import { Router } from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  editOrder,
  deleteOrderById,
} from "../controllers/order.controller.js";
import { orderSchema } from "../schemas/order.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get orders
router.get("/get-orders", getOrders);

// Get order by Id
router.get("/get-order", getOrderById);

// Create order
router.post(
  "/create-order",
  validator(orderSchema),
  createOrder,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update order
router.put(
  "/edit-order",
  validator(orderSchema),
  editOrder,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-order", deleteOrderById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
