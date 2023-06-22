import { Router } from "express";
import {
  createDriverCertificate,
  getDriverCertificates,
  getDriverCertificateById,
  editDriverCertificate,
  deleteDriverCertificateById,
} from "../controllers/driver_certifications.controller.js";
import { driverCertificateSchema } from "../schemas/driver_certifications.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get DriverCertificates
router.get("/get-driverCertificates", getDriverCertificates);

// Get DriverCertificate by Id
router.get("/get-driverCertificate", getDriverCertificateById);

// Create DriverCertificate
router.post(
  "/create-driverCertificate",
  validator(driverCertificateSchema),
  createDriverCertificate,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update DriverCertificate
router.put(
  "/edit-driverCertificate",
  validator(driverCertificateSchema),
  editDriverCertificate,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete(
  "/delete-driverCertificate",
  deleteDriverCertificateById,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

export default router;
