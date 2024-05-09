import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();
// اولین یوزر روتر اینه اسمش تسته
//سرویس API ساده با استفاده از Express
router.get("/test",test) 

export default router;
