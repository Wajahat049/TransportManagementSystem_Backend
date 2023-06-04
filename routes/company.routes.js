import { Router } from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  editCompany,
  deleteCompanyById,
} from "../controllers/company.controller.js";
import { companySchema } from "../schemas/company.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// Get Drivers
router.get("/get-companies", getCompanies);

// Get Driver by Id
router.get("/get-company", getCompanyById);

// Create Driver
router.post(
  "/create-company",
  validator(companySchema),
  createCompany,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

// Update Driver
router.put(
  "/edit-company",
  validator(companySchema),
  editCompany,
  function (req, res, err) {
    console.log("RES", res);
    console.log("req", req);
  }
);

router.delete("/delete-company", deleteCompanyById, function (req, res, err) {
  console.log("RES", res);
  console.log("req", req);
});

export default router;
