const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  password: String,
});

module.exports = mongoose.model("Form", FormSchema);
