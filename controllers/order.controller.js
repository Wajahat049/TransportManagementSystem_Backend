import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createOrder = async (req, res, next) => {
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

    // Saving Orders in the Database

    const [result] = await pool.query("INSERT INTO orders SET ? ", {
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
        .send({ message: "Success", data: "Order created successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Order not created" });
    return;
  }
};

export const editOrder = async (req, res, next) => {
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

    // Saving Order in the Database

    const [result] = await pool.query("UPDATE orders SET ? where id = ? ", [
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
        .send({ message: "Success", data: "Order updated successfully" });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Order not updated" });
    return;
  }
};

export const deleteOrderById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM orders where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Order deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Order not deleted" });
    return;
  }
};

export const getOrders = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM orders");

  const result = rows;

  res.status(200).send({ message: "Success", data: result });

  console.log("RES", result);
};

export const getOrderById = async (req, res, next) => {
  const [rows] = await pool.query(
    `SELECT * FROM orders where id=${req.query.id}`
  );

  var result = rows;

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...result],
  });
};
