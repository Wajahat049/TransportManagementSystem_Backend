import { Router } from "express";
import {
  createVendor,
  getVendors,
  getVendorById,
  editVendor,
  deleteVendorById,
} from "../controllers/vendor.controller.js";
import { vendorSchema } from "../schemas/vendor.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get vendors
router.get("/get-vendors", getVendors);

// Get vendor by Id
router.get("/get-vendor", getVendorById);

// Create vendor
router.post(
  "/create-vendor",
  validator(vendorSchema),
  createVendor,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update vendor
router.put(
  "/edit-vendor",
  validator(vendorSchema),
  editVendor,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-vendor", deleteVendorById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
