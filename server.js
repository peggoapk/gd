// ADV *********
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const blogs = require("./routes/api/blogs");
const path = require("path");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");

// ADV **********************
const cors = require("cors");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/api/auth");
const blogRoutes = require("./routes/api/blogs");
// end adv

const app = express();

app.use(bodyParser.json());

// ADV **********************
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/blogs", loginRequired, ensureCorrectUser, blogRoutes);
// app.use("/api/blogs/:id/create", loginRequired, ensureCorrectUser, blogs);
// app.use("/api/blogs", blogs); - ORIGINAL

// this is giving the err msg on when viewing.
app.use(function(req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

// end // ADV **********************

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Mogollon server started on ${port}`));
