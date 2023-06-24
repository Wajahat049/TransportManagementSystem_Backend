import { Router } from "express";
import {
  createDocument,
  deleteDocumentById,
  getDocumentsById,
} from "../controllers/document.controller.js";
import { documentSchema } from "../schemas/document.schema.js";
import { validator } from "../middlewares/validator.middleware.js";

const router = Router();

// // Get Drivers
// router.get("/get-companies", getCompanies);

// // Get Driver by Id
router.get("/get-user-documents", getDocumentsById);

// router.get("/get-company-by-userId", getCompanyByUserId);

// Create Driver
router.post("/create-document", validator(documentSchema), createDocument);

// // Update Driver
// router.put(
//   "/edit-company",
//   validator(companySchema),
//   editCompany,
//   function (req, res, err) {
//     console.log("RES", res);
//     console.log("req", req);
//   }
// );

router.delete("/delete-document", deleteDocumentById);

export default router;
