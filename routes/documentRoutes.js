const express = require("express");
const { getAllDocs, getDocById, createDoc } = require("../controllers/documentController");
const router = express.Router();

router.get("/", getAllDocs);
router.get("/:id", getDocById);
router.post("/", createDoc);

module.exports = router;
