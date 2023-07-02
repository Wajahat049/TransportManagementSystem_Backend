import passport from "passport";
import { encryptPassword, matchPassword } from "../lib/helpers.js";
import { pool } from "../database.js";
import jwt from "jsonwebtoken";

export const renderSignUp = (req, res) => res.render("auth/signup");

export const signUp = async (req, res, next) => {
  const { full_name, email, password } = req.body;

  console.log(full_name, email, password);

  const encryptedPassword = await encryptPassword(password);

  try {
    // Saving in the Database
    const [result] = await pool.query("INSERT INTO users SET ? ", {
      full_name,
      email,
      password: encryptedPassword,
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    console.log("Result", result);
    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "You are registered successfully!" });
    }
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(200).send({ message: "Error", data: "User already exists" });
    }
  }
};

export const renderSignIn = (req, res) => res.render("auth/signin");

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Saving in the Database
    const [result] = await pool.query(
      `SELECT * FROM users WHERE email = "${email}"`
    );

    if (result.length !== 0) {
      const matchedPassword = await matchPassword(password, result[0].password);
      if (matchedPassword) {
        console.log("RESULT", result[0].id);
        const token = jwt.sign(
          { user_id: result[0].email + result[0].id },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: process.env.JWT_EXPIRES_IN,
          }
        );
        return res
          .status(200)
          .send({ message: "Success", data: result, token: token });
      } else {
        return res
          .status(200)
          .send({ message: "Error", data: "Password is incorrect" });
      }
    } else {
      return res
        .status(200)
        .send({ message: "Error", data: "User do not Exist. Register First!" });
    }
  } catch (error) {
    console.log(error);
    // if (error.code === "ER_DUP_ENTRY") {
    //   res.status(400).send({ message: "Error", data: "User already exists" });
    // }
  }
};

export const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
};

export const test = async (req, res, next) => {
  const [rows] = await pool.query("SELECT * FROM test");

  const test = rows[0];

  console.log("TEST", test);
};
