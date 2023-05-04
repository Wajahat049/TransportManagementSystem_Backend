import { Router } from "express";
import auth from "./auth.routes.js";
import index from "./index.routes.js";
import links from "./links.routes.js";
import user from "./user.routes.js";
import orderML from "./orderML.routes.js";
import driver from "./driver.routes.js";

const router = Router();

router.use(index);
router.use(auth);
router.use(user);
router.use(orderML);
router.use(driver);
router.use("/links", links);

export default router;
