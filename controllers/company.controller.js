import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createCompany = async (req, res, next) => {
  try {
    const {
      user_id,
      name,
      email_address,
      street_no,
      street_name,
      city,
      province,
      country,
      postal_or_zip_code,
      currency,
      CVOR_no,
      DOT_no,
      MC_no,
      SCAC_code,
      carrier_code,
      CTPAT_no,
      PIP_no,
      bill_of_lading,
      customer_invoice,
      logo,
    } = req.body;

    const [result] = await pool.query("INSERT INTO companies SET ? ", {
      user_id,
      name,
      email_address,
      street_no,
      street_name,
      city,
      province,
      country,
      postal_or_zip_code,
      currency,
      CVOR_no,
      DOT_no,
      MC_no,
      SCAC_code,
      carrier_code,
      CTPAT_no,
      PIP_no,
      bill_of_lading,
      customer_invoice,
      logo,
    });
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Company created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Company not created" });
    return;
  }
};

export const editCompany = async (req, res, next) => {
  console.log("REQ", req.body);
  try {
    const {
      unit_no,
      year,
      make,
      model,
      vin_no,
      odometer,
      plate_no,
      annual_safety_inspection_date,
      vehicle_type,
      asset_type,
      trailer_type,
      trailer_size,
      reefer_hours,
    } = req.body;

    const [result] = await pool.query("UPDATE companies SET ? where id = ? ", [
      {
        unit_no,
        year,
        make,
        model,
        vin_no,
        odometer,
        plate_no,
        annual_safety_inspection_date,
        vehicle_type,
        asset_type,
        trailer_type,
        trailer_size,
        reefer_hours,
      },
      req.query.id,
    ]);
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Company updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Company not updated" });
    return;
  }
};

export const deleteCompanyById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM companies where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Company deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Company not deleted" });
    return;
  }
};

export const getCompanies = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM companies");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getCompanyById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM companies where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
