import passport from "passport";
import { encryptPassword, matchPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const renderSignUp = (req, res) => res.render("auth/signup");

export const signUp = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  const encryptedPassword = await encryptPassword(password);

  try {
    // Saving in the Database
    const [result] = await pool.query("INSERT INTO users SET ? ", {
      full_name: fullName,
      email,
      password: encryptedPassword,
    });

    console.log("Result", result);
    if (result?.affectedRows !== 0) {
      return res
        .status(200)
        .send({ message: "Success", data: "User created successfully" });
    }
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).send({ message: "Error", data: "User already exists" });
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
        return res.status(200).send({ message: "Success", data: result });
      } else {
        return res
          .status(200)
          .send({ message: "Error", data: "Password is incorrect" });
      }
    } else {
      return res
        .status(200)
        .send({ message: "Error", data: "User do not Exist" });
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
