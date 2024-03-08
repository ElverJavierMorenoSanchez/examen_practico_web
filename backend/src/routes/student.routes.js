import { Router } from "express";
import {
  deleteStudent,
  getStudent,
  getStudents,
  postStudent,
  putStudent,
} from "../controllers/student.controller";
const router = Router();

router.get("/", getStudents);
router.post("/", postStudent);
router.get("/:id", getStudent);
router.put("/:id", putStudent);
router.delete("/:id", deleteStudent);

export default router;
