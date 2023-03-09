const express = require("express");
const router = express.Router();
const { getProject, setProject } = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProject).post(protect, setProject);

module.exports = router;
