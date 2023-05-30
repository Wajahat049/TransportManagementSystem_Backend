import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";
import { fileTypeFromBuffer } from "file-type";
import { Blob } from "buffer";
import fs from "fs";

export const createShipper = async (req, res, next) => {
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

    // Saving Shippers in the Database

    const [result] = await pool.query("INSERT INTO shippers SET ? ", {
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
        .send({ message: "Success", data: "Shipper created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Shipper not created" });
    return;
  }
};

export const editShipper = async (req, res, next) => {
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

    // Saving Shipper in the Database

    const [result] = await pool.query("UPDATE shippers SET ? where id = ? ", [
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
        .send({ message: "Success", data: "Shipper updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Shipper not updated" });
    return;
  }
};

export const deleteShipperById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM shippers where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Shipper deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Shipper not deleted" });
    return;
  }
};

export const getShippers = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM shippers");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getShipperById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM shippers where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
