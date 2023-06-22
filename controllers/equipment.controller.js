import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createEquipment = async (req, res, next) => {
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
      lessor_name,
      lessor_street_no,
      lessor_street_name,
      lessor_city,
      lessor_postal_code,
      lesor_province,
      lessor_country,
      lessor_contact_name,
      lessor_email,
      lessor_phone_no,
      lessor_start_date,
      lessor_end_date,
      lessor_payment_before_tax,
      lessor_down_payment,
    } = req.body;

    // Saving equipments in the Database

    const [result] = await pool.query("INSERT INTO equipments SET ? ", {
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
      lessor_name,
      lessor_street_no,
      lessor_street_name,
      lessor_city,
      lessor_postal_code,
      lesor_province,
      lessor_country,
      lessor_contact_name,
      lessor_email,
      lessor_phone_no,
      lessor_start_date,
      lessor_end_date,
      lessor_payment_before_tax,
      lessor_down_payment,
    });
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({
          message: "Success",
          data: "Equipment created successfully",
          id: result.insertId,
        });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Equipment not created" });
    return;
  }
};

export const editEquipment = async (req, res, next) => {
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
      lessor_name,
      lessor_street_no,
      lessor_street_name,
      lessor_city,
      lessor_postal_code,
      lesor_province,
      lessor_country,
      lessor_contact_name,
      lessor_email,
      lessor_phone_no,
      lessor_start_date,
      lessor_end_date,
      lessor_payment_before_tax,
      lessor_down_payment,
    } = req.body;

    // Saving equipment in the Database

    const [result] = await pool.query("UPDATE equipments SET ? where id = ? ", [
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
        lessor_name,
        lessor_street_no,
        lessor_street_name,
        lessor_city,
        lessor_postal_code,
        lesor_province,
        lessor_country,
        lessor_contact_name,
        lessor_email,
        lessor_phone_no,
        lessor_start_date,
        lessor_end_date,
        lessor_payment_before_tax,
        lessor_down_payment,
      },
      req.query.id,
    ]);
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res
        .status(200)
        .send({ message: "Success", data: "Equipment updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Equipment not updated" });
    return;
  }
};

export const deleteEquipmentById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM equipments where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Equipment deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Equipment not deleted" });
    return;
  }
};

export const getEquipments = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM equipments");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getEquipmentById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM equipments where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
