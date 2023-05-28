import { Router } from "express";
import {
  createEquipment,
  getEquipments,
  getEquipmentById,
  editEquipment,
  deleteEquipmentById,
} from "../controllers/equipment.controller.js";
import { equipmentSchema } from "../schemas/equipment.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get equipments
router.get("/get-equipments", getEquipments);

// Get equipment by Id
router.get("/get-equipment", getEquipmentById);

// Create equipment
router.post(
  "/create-equipment",
  validator(equipmentSchema),
  createEquipment,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update equipment
router.put(
  "/edit-equipment",
  validator(equipmentSchema),
  editEquipment,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete(
  "/delete-equipment",
  deleteEquipmentById,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

export default router;
