import { Router } from "express";
import { createDriver, getDrivers } from "../controllers/driver.controller.js";
import { driverSchema } from "../schemas/driver.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Create Driver
router.get("/get-drivers", getDrivers);

// Get Drivers
router.post(
  "/create-driver",
  validator(driverSchema),
  createDriver,
  function (req, res) {
    console.log("RES", res);
    console.log("req", req);
    //   res.send({ message: "Success", data: req.user });
  }
);

export default router;
