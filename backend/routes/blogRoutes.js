// each res will have it's own route file.
const express = require("express");
const router = express.Router();
const { getBlogs, setBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware.js");

// Made them protected just for the project
router.route("/").get(protect, getBlogs).post(protect, setBlog);
router.route("/:id").put(protect, updateBlog).delete(protect, deleteBlog);

module.exports = router;
