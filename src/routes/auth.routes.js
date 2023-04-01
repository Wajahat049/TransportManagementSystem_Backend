import { Router } from "express";
import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  logout,
  test,
} from "../controllers/auth.controller.js";
import { validator } from "../middlewares/validator.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const router = Router();

// SIGNUP
router.get("/signup", renderSignUp);
router.post("/signup", validator(signupSchema), signUp);

// SINGIN
// router.get("/signin", renderSignIn);
router.post("/login", validator(signinSchema), signIn, function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  // Then you can send your json as response.
  // res.json({message:"Success", username: req.user.username});
  res.send({ message: "Success", data: req.user });
});

router.get("/logout", logout);

router.get("/test", test);

export default router;
