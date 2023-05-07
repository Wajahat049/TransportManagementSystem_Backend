import { Router } from "express";
import {
  createDriver,
  getDrivers,
  getDriverById,
} from "../controllers/driver.controller.js";
import { driverSchema } from "../schemas/driver.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Create Driver
router.get("/get-drivers", getDrivers);

router.get("/get-driver", getDriverById);

// Get Drivers
router.post(
  "/create-driver",
  validator(driverSchema),
  createDriver,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
    //   res.send({ message: "Success", data: req.user });
  }
);

export default router;
