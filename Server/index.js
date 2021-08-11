const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formSubmit = require("./routes/submit");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/submit", formSubmit);

app.get("/", (req, res) => {
  res.json("we are on home");
});

const url =
  "mongodb+srv://anish:anish123@cluster0.x250z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Database connected on port 5000")
);

app.listen("5000");
