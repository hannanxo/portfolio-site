const asyncHandler = require("express-async-handler");
// To avoid using try and catch

// @desc Get blogs
// @route  GET /api/blogs
// @access Private
const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get blogs" });
});

// @desc Set blogs
// @route  POST /api/blogs
// @access Private
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set blogs" });
});

// @desc Update blogs
// @route  PUT /api/blogs/:id
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update blog ${req.params.id}` });
});

// @desc Delete blogs
// @route  DELETE /api/blogs/:id
// @access Private
const deleteBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete blog ${req.params.id}` });
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
