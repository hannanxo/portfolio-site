const asyncHandler = require("express-async-handler");
// To avoid using try and catch

const Blog = require("../models/blogModel");
// blog will have a bunch of mongoose methods to create/read in db

// @desc   Get blogs
// @route  GET /api/blogs
// @access Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

// @desc   Set blogs
// @route  POST /api/blogs
// @access Private
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.content) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  });
  res.status(200).json(blog);
});

// @desc   Update blogs
// @route  PUT /api/blogs/:id
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Goal not found");
  }
  // Might need to add some code here for admin power

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedBlog);
});

// @desc   Delete blogs
// @route  DELETE /api/blogs/:id
// @access Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }
  // Might need to add some code here for admin power

  await blog.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
