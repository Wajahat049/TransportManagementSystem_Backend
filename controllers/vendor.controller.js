import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createVendor = async (req, res, next) => {
  // console.log("REQ", req);
  try {
    const {
      name,
      contact_name,
      phone_no,
      email_address,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      payment_net_days,
    } = req.body;

    // Saving vendors in the Database

    const [result] = await pool.query("INSERT INTO vendors SET ? ", {
      name,
      contact_name,
      phone_no,
      email_address,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      payment_net_days,
    });
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Vendor created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Vendor not created" });
    return;
  }
};

export const editVendor = async (req, res, next) => {
  console.log("REQ", req.body);
  try {
    const {
      name,
      contact_name,
      phone_no,
      email_address,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      payment_net_days,
    } = req.body;

    // Saving employee in the Database

    const [result] = await pool.query("UPDATE vendors SET ? where id = ? ", [
      {
        name,
        contact_name,
        phone_no,
        email_address,
        street_no,
        street_name,
        city,
        postal_or_zip_code,
        province,
        country,
        payment_net_days,
      },
      req.query.id,
    ]);
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Vendor updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Vendor not updated" });
    return;
  }
};

export const deleteVendorById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM vendors where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Vendor deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Vendor not deleted" });
    return;
  }
};

export const getVendors = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM vendors");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getVendorById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM vendors where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
