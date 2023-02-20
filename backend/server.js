// entry point to our server
const express = require("express");
const dotenv = require("dotenv").config(); //for env variables
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

// Initial express
const app = express();

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blogRoutes"));

app.use(errorHandler); //will override express's default error handler (HTML)

app.listen(port, () => console.log(`Server started on port ${port}`));
