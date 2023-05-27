import { Router } from "express";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  editEmployee,
  deleteEmployeeById,
} from "../controllers/employee.controller.js";
import { employeeSchema } from "../schemas/employee.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get employees
router.get("/get-employees", getEmployees);

// Get employee by Id
router.get("/get-employee", getEmployeeById);

// Create employee
router.post(
  "/create-employee",
  validator(employeeSchema),
  createEmployee,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update employee
router.put(
  "/edit-employee",
  validator(employeeSchema),
  editEmployee,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-employee", deleteEmployeeById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
