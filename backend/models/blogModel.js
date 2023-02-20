// Operations that you want to perform on a collection
// Here we define the scheme for blogs
const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: { type: String },
  content: { type: String },
  date: { type: Date },
});

module.exports = mongoose.model("blog", blogSchema);
