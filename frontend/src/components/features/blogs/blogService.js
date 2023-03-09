import axios from "axios";
const API_URL = "/api/blogs";

// get all blogs

const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const blogService = {
  getBlogs,
};

export default blogService;
