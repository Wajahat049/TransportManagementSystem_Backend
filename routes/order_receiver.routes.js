import { Router } from "express";
import {
  createReceiver,
  getReceivers,
  getReceiverById,
  editReceiver,
  deleteReceiverById,
} from "../controllers/order_receiver.controller.js";
import { receiverSchema } from "../schemas/order_receiver.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get Receivers
router.get("/get-receivers", getReceivers);

// Get Receiver by Id
router.get("/get-receiver", getReceiverById);

// Create Receiver
router.post(
  "/create-receiver",
  validator(receiverSchema),
  createReceiver,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update Receiver
router.put(
  "/edit-receiver",
  validator(receiverSchema),
  editReceiver,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-receiver", deleteReceiverById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
