import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const renderSignUp = (req, res) => res.render("auth/signup");

export const signUp = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  const encryptedPassword = await encryptPassword(password);

  // Saving in the Database
  const [result] = await pool.query("INSERT INTO users SET ? ", {
    full_name: fullName,
    email,
    password: encryptedPassword,
  });

  console.log("Result", result);

  req.login(
    {
      id: result.insertId,
      fullName,
      email,
    },
    (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/links");
    }
  );
};

export const renderSignIn = (req, res) => res.render("auth/signin");

export const signIn = passport.authenticate("local.signin", {
  failureMessage: true,
  failureFlash: true,
  successFlash: true,
  successMessage: true,
});

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