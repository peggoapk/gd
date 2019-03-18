const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const blogs = require("./routes/api/blogs");
const path = require("path");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

sgMail.setApiKey(
  "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"
);

app.use(cors());

app.get("/api/send-email", (req, res) => {
  const { recipient, email, topic, message } = req.query;
  const msg = {
    to: recipient,
    from: email,
    subject: topic,
    text: message
  };

  sgMail.send(msg).then(msg => console.log(text));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// use routes
app.use("/api/users", users);
app.use("/api/blogs", blogs);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Mogollon server started on ${port}`));
