import axios from "axios";
const API_URL = "/api/projects";

// get all projects

const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const projectService = {
  getProjects,
};

export default projectService;
