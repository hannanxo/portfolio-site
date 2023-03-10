// entry point to our server
const express = require("express");
const dotenv = require("dotenv").config(); //for env variables
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db.js");
const port = process.env.PORT || 5556;

connectDB();

// Initial express
const app = express();

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler); //will override express's default error handler (HTML)

app.listen(port, () => console.log(`Server started on port ${port}`));
