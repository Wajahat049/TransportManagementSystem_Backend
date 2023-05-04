import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createDriver = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      gender,
      date_of_birth,
      phone_no,
      email_address,
      password,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      license_no,
      license_class,
      license_country,
      license_province,
      license_date_of_issuance,
      license_date_of_expiry,
      driver_type,
      pay_type,
      driver_status,
      last_medical_completed_date,
      medical_due_date,
      last_drug_test_completed_date,
      drug_test_due_date,
    } = req.body;

    // Saving Driver in the Database

    const [result] = await pool.query("INSERT INTO drivers SET ? ", {
      first_name,
      last_name,
      gender,
      date_of_birth,
      phone_no,
      email_address,
      password,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      license_no,
      license_class,
      license_country,
      license_province,
      license_date_of_issuance,
      license_date_of_expiry,
      driver_type,
      pay_type,
      driver_status,
      last_medical_completed_date,
      medical_due_date,
      last_drug_test_completed_date,
      drug_test_due_date,
    });

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Driver created successfully" });
    }

    console.log("Result", result);
  } catch (error) {
    console.log("ERR", error);
    res.status(200).send({ message: "Error", data: "Driver not created" });
  }
};

export const getDrivers = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM drivers");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};
