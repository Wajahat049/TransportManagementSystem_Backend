import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";
import { fileTypeFromBuffer } from "file-type";
import { Blob } from "buffer";
import fs from "fs";

export const createEmployee = async (req, res, next) => {
  // console.log("REQ", req);
  try {
    const {
      employment_type,
      pay_type,
      division,
      first_name,
      last_name,
      gender,
      date_of_birth,
      phone_no,
      email_address,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      salary_rate,
      hourly_rate,
      payment_frequency,
      emergency_contact_no,
      emergency_contact_name,
    } = req.body;

    // Saving employees in the Database

    const [result] = await pool.query("INSERT INTO employees SET ? ", {
      employment_type,
      pay_type,
      division,
      first_name,
      last_name,
      gender,
      date_of_birth,
      phone_no,
      email_address,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      salary_rate,
      hourly_rate,
      payment_frequency,
      emergency_contact_no,
      emergency_contact_name,
    });
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Employee created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Employee not created" });
    return;
  }
};

export const editEmployee = async (req, res, next) => {
  console.log("REQ", req.body);
  try {
    const {
      employment_type,
      pay_type,
      division,
      first_name,
      last_name,
      gender,
      date_of_birth,
      phone_no,
      email_address,
      street_no,
      street_name,
      city,
      postal_or_zip_code,
      province,
      country,
      salary_rate,
      hourly_rate,
      payment_frequency,
      emergency_contact_no,
      emergency_contact_name,
    } = req.body;

    // Saving employee in the Database

    const [result] = await pool.query("UPDATE employees SET ? where id = ? ", [
      {
        employment_type,
        pay_type,
        division,
        first_name,
        last_name,
        gender,
        date_of_birth,
        phone_no,
        email_address,
        street_no,
        street_name,
        city,
        postal_or_zip_code,
        province,
        country,
        salary_rate,
        hourly_rate,
        payment_frequency,
        emergency_contact_no,
        emergency_contact_name,
      },
      req.query.id,
    ]);
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Employee updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Employee not updated" });
    return;
  }
};

export const deleteEmployeeById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM employees where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Employee deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Employee not deleted" });
    return;
  }
};

export const getEmployees = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM employees");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getEmployeeById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM employees where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
