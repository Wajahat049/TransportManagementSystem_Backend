import { Router } from "express";
import {
  createShipper,
  getShippers,
  getShipperById,
  editShipper,
  deleteShipperById,
} from "../controllers/order_shipper.controller.js";
import { shipperSchema } from "../schemas/order_shipper.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get Shippers
router.get("/get-shippers", getShippers);

// Get Shipper by Id
router.get("/get-shipper", getShipperById);

// Create Shipper
router.post(
  "/create-shipper",
  validator(shipperSchema),
  createShipper,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update shipper
router.put(
  "/edit-shipper",
  validator(shipperSchema),
  editShipper,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-shipper", deleteShipperById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
