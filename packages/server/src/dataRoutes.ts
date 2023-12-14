import { Router } from "express";
const router = Router();

import { getData, getAllFilters } from "./dataController.js";

router.get("/", getData);
router.get("/filters", getAllFilters);

export default router;
