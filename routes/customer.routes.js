import { Router } from "express";
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  editCustomer,
  deleteCustomerById,
} from "../controllers/customer.controller.js";
import { customerSchema } from "../schemas/customer.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get customers
router.get("/get-customers", getCustomers);

// Get customer by Id
router.get("/get-customer", getCustomerById);

// Create customer
router.post(
  "/create-customer",
  validator(customerSchema),
  createCustomer,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update customer
router.put(
  "/edit-customer",
  validator(customerSchema),
  editCustomer,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-customer", deleteCustomerById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
