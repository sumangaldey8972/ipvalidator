const mongoose = require("mongoose");

const ipSchema = mongoose.Schema({
  ip1: { type: String, required: true, },
  ip2: { type: String, required: true,  },
});

const ipModel = new mongoose.model("ip", ipSchema);

module.exports = ipModel;
