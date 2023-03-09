const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  image: { type: String },
  github: { type: String },
});

module.exports = mongoose.model("project", projectSchema);
