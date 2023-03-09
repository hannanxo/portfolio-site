// each res will have it's own route file.
const express = require("express");
const router = express.Router();
const { getBlogs, setBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").get(getBlogs).post(protect, setBlog);
router.route("/:id").put(protect, updateBlog).delete(protect, deleteBlog);

module.exports = router;
