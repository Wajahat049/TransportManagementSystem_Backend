import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createDriver = async (req, res, next) => {
  // console.log("REQ", req);
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
      HST_no,
      pay_HST,
      pay_by,
      salary,
      payment_frequency,
      hourly_rate,
      mileage_rate,
      license,
      passport,
      other_documents,
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
      HST_no,
      pay_HST,
      pay_by,
      salary,
      payment_frequency,
      hourly_rate,
      mileage_rate,
      license,
      passport,
      other_documents,
    });
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Driver created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Driver not created" });
    return;
  }
};

export const editDriver = async (req, res, next) => {
  console.log("REQ", req.body);
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
      company_name,
      HST_no,
      pay_HST,
      pay_by,
      salary,
      payment_frequency,
      hourly_rate,
      mileage_rate,
      license,
      passport,
      other_documents,
    } = req.body;

    // Saving Driver in the Database

    const [result] = await pool.query("UPDATE drivers SET ? where id = ? ", [
      {
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
        company_name,
        HST_no,
        pay_HST,
        pay_by,
        salary,
        payment_frequency,
        hourly_rate,
        mileage_rate,
        license,
        passport,
        other_documents,
      },
      req.query.id,
    ]);
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Driver updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Driver not updated" });
    return;
  }
};

export const deleteDriverById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM drivers where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Driver deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Driver not deleted" });
    return;
  }
};

export const getDrivers = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM drivers");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getDriverById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM drivers where id=${req.query.id}`
  );

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};
