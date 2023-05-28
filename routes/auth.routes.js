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
router.post("/signUp", validator(signupSchema), signUp);

// SINGIN
// router.get("/signin", renderSignIn);
router.post("/signIn", validator(signinSchema), signIn);

router.get("/signOut", logout);

router.get("/test", test);

export default router;
