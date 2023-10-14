import express from "express";
import {  get_sengle_delete_teacher, get_sengle_teacher, get_sengle_teacher_update, getall_teacher, getall_techer } from "../controller/techer_controller.js";
import { photo_uplode } from "../utility/multer.js";

// router init
const router = express.Router();

// router setup
router.get("/add_techer", getall_teacher)
router.get("/add_techer/:id", get_sengle_teacher)
router.patch("/add_techer/:id",photo_uplode, get_sengle_teacher_update)
router.delete("/add_techer/:id", get_sengle_delete_teacher)
router.post("/add_techer",photo_uplode, getall_techer)



// routre export 
export default router;