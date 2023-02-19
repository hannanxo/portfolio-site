// @desc Get blogs
// @route  GET /api/blogs
// @access Private
const getBlogs = (req, res) => {
  res.status(200).json({ message: "Get blogs" });
};

// @desc Set blogs
// @route  POST /api/blogs
// @access Private
const setBlog = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set blogs" });
};

// @desc Update blogs
// @route  PUT /api/blogs/:id
// @access Private
const updateBlog = (req, res) => {
  res.status(200).json({ message: `Update blog ${req.params.id}` });
};

// @desc Delete blogs
// @route  DELETE /api/blogs/:id
// @access Private
const deleteBlog = (req, res) => {
  res.status(200).json({ message: `Delete blog ${req.params.id}` });
};

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
