import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { pool } from "../database.js";
import { matchPassword } from "./helpers.js";

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const [rows] = await pool.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password]
      );
      if (rows.length >= 1) {
        const user = rows[0];
        console.log("IF");
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});
