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
router.post("/login", validator(signinSchema), signIn);

router.get("/logout", logout);

router.get("/test", test);

export default router;
