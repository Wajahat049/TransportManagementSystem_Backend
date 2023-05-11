import { Router } from "express";
import {
  createDriver,
  getDrivers,
  getDriverById,
  editDriver,
} from "../controllers/driver.controller.js";
import { driverSchema } from "../schemas/driver.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get Drivers
router.get("/get-drivers", getDrivers);

// Get Driver by Id
router.get("/get-driver", getDriverById);

// Create Driver
router.post(
  "/create-driver",
  validator(driverSchema),
  createDriver,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update Driver
router.put(
  "/edit-driver",
  validator(driverSchema),
  editDriver,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

export default router;
