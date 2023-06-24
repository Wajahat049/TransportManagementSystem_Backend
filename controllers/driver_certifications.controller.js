import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createDriverCertificate = async (req, res, next) => {
  // console.log("REQ", req);
  try {
    const { driver_id, certificates } = req.body;

    // Saving driver_certifications in the Database

    const [result] = await pool.query(
      "INSERT INTO driver_certifications (driver_id, user_id, certificate_number, issue_date, due_date) VALUES ? ",
      [
        certificates.map((item) => [
          driver_id,
          item.user_id,
          item.certificate_number,
          item.issue_date,
          item.due_date,
        ]),
      ]
    );
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res.status(200).send({
        message: "Success",
        data: "driver_certifications created successfully",
      });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res
      .status(400)
      .send({ message: "Error", data: "driver_certifications not created" });
    return;
  }
};

export const editDriverCertificate = async (req, res, next) => {
  console.log("REQ", req.body);
  try {
    const { driver_id, user_id, certificate_number, issue_date, due_date } =
      req.body;

    // Saving employee in the Database

    const [result] = await pool.query(
      "UPDATE driver_certifications SET ? where id = ? ",
      [
        { driver_id, user_id, certificate_number, issue_date, due_date },
        req.query.id,
      ]
    );
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res.status(200).send({
        message: "Success",
        data: "driver_certifications updated successfully",
      });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res
      .status(400)
      .send({ message: "Error", data: "driver_certifications not updated" });
    return;
  }
};

export const deleteDriverCertificateById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM driver_certifications where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res.status(200).send({
        message: "Success",
        data: "driver_certifications deleted successfully",
      });
    }
  } catch (error) {
    console.log("ERR", error);
    res
      .status(400)
      .send({ message: "Error", data: "DriverCertificate not deleted" });
    return;
  }
};

export const getDriverCertificates = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM driver_certifications");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getDriverCertificateById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM driver_certifications where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
