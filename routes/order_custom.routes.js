import { Router } from "express";
import {
  createCustom,
  getCustoms,
  getCustomById,
  editCustom,
  deleteCustomById,
} from "../controllers/order_custom.controller.js";
import { customSchema } from "../schemas/order_custom.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get Customs
router.get("/get-customs", getCustoms);

// Get Custom by Id
router.get("/get-custom", getCustomById);

// Create Custom
router.post(
  "/create-custom",
  validator(customSchema),
  createCustom,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update Custom
router.put(
  "/edit-custom",
  validator(customSchema),
  editCustom,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-custom", deleteCustomById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
