import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const createDocument = async (req, res, next) => {
  // console.log("REQ", req);
  try {
    const { documents, id } = req.body;
    console.log("DOC", JSON.parse(documents));
    const allDocs = JSON.parse(documents);

    // Saving employees in the Database

    const [result] = await pool.query(
      "INSERT INTO documents (account_id, user_id, name, type, document, created_at, updated_at ) VALUES ?",
      [
        allDocs.map((item) => [
          id,
          item.user_id,
          item.name,
          item.type,
          item.document,
          Date.now(),
          Date.now(),
        ]),
      ]
    );
    console.log("Result", result);

    if (result?.affectedRows !== 0) {
      res.status(200).send({
        message: "Success",
        data: "Document uploaded successfully",
      });
      return;
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Document not uploaded" });
    return;
  }
};

// export const editEmployee = async (req, res, next) => {
//   console.log("REQ", req.body);
//   try {
//     const {
//       employment_type,
//       pay_type,
//       division,
//       first_name,
//       last_name,
//       gender,
//       date_of_birth,
//       phone_no,
//       email_address,
//       street_no,
//       street_name,
//       city,
//       postal_or_zip_code,
//       province,
//       country,
//       salary_rate,
//       hourly_rate,
//       payment_frequency,
//       emergency_contact_no,
//       emergency_contact_name,
//     } = req.body;

//     // Saving employee in the Database

//     const [result] = await pool.query("UPDATE employees SET ? where id = ? ", [
//       {
//         employment_type,
//         pay_type,
//         division,
//         first_name,
//         last_name,
//         gender,
//         date_of_birth,
//         phone_no,
//         email_address,
//         street_no,
//         street_name,
//         city,
//         postal_or_zip_code,
//         province,
//         country,
//         salary_rate,
//         hourly_rate,
//         payment_frequency,
//         emergency_contact_no,
//         emergency_contact_name,
//       },
//       req.query.id,
//     ]);
//     console.log("Result", result);

//     if (result?.affectedRows !== 0) {
//       res
//         .status(200)
//         .send({ message: "Success", data: "Employee updated successfully" });
//       return;
//     }
//   } catch (error) {
//     console.log("ERR", error);
//     res.status(400).send({ message: "Error", data: "Employee not updated" });
//     return;
//   }
// };

export const deleteDocumentById = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `DELETE FROM documents where id=${req.query.id}`
    );

    const result = rows;

    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "Document deleted successfully" });
    }
  } catch (error) {
    console.log("ERR", error);
    res.status(400).send({ message: "Error", data: "Document not deleted" });
    return;
  }
};

// export const getEmployees = async (req, res, next) => {
//   const [rows] = await pool.query("SELECT * FROM employees");

//   const result = rows;

//   res.status(200).send({ message: "Success", data: result });

//   console.log("RES", result);
// };

export const getDocumentsById = async (req, res, next) => {
  const [rows] = await pool.query(
    "SELECT * FROM documents WHERE account_id = ? AND type = ?",
    [req.query.id, req.query.type]
  );

  var result = rows;

  var newRes = result?.map((res) => {
    return {
      id: res.id,
      user_id: res.user_id,
      account_id: res.account_id,
      name: res.name,
      type: res.type,
      document_base64: new Buffer.from(result[0].document).toString("ascii"),
    };
  });

  console.log("RESULT", result);

  res.status(200).send({
    message: "Success",
    data: [...newRes],
  });
};
