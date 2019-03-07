const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogs = require("./routes/api/blogs");
const path = require("path");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use("/api/mogollon", blogs);

if (process.env.NODE_ENV === "productio") {
  app.use(express.statis("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Mogollon server started on ${port}`));
