const asyncHandler = require("express-async-handler");

const Project = require("../models/projectModel");

// @desc Get projects
// @route GET /api/projects
// @access Public
const getProject = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

// @desc Set projects
// @route POST /api/projects
// @access Private

const setProject = asyncHandler(async (req, res) => {
  if (!req.body.desc) {
    res.status(400);
    throw new Error("Please add necessary project fields");
  }
  const project = await Project.create({
    name: req.body.name,
    desc: req.body.desc,
    image: req.body.image,
    github: req.body.github,
  });
  res.status(200).json(project);
});
module.exports = {
  getProject,
  setProject,
};
