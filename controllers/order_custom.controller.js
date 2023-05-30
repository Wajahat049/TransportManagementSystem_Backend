import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";
import { fileTypeFromBuffer } from "file-type";
import { Blob } from "buffer";
import fs from "fs";

export const createCustom = async (req, res, next) => {
  // console.log("REQ", req);
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

    // Saving Customs in the Database

    const [result] = await pool.query("INSERT INTO customs SET ? ", {
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
    });
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Custom created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Custom not created" });
    return;
  }
};

export const editCustom = async (req, res, next) => {
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

    // Saving Custom in the Database

    const [result] = await pool.query("UPDATE customs SET ? where id = ? ", [
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
        .send({ message: "Success", data: "Custom updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Custom not updated" });
    return;
  }
};

export const deleteCustomById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM customs where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Custom deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Custom not deleted" });
    return;
  }
};

export const getCustoms = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM customs");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getCustomById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM customs where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
