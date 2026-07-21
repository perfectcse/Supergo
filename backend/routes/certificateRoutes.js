import express from "express";
import {
  createCertificate,
  getAllCertificates,
  getCertificateById,
  verifyCertificate,
} from "../controllers/certificateController.js";

const router = express.Router();

router.post("/", createCertificate);
router.get("/", getAllCertificates);

// IMPORTANT: Keep this route BEFORE "/:id"
router.get("/verify/:certificateId", verifyCertificate);

router.get("/:id", getCertificateById);

export default router;