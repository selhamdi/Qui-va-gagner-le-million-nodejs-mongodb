const mongoose = require("mongoose");

const roundStactSchema = new mongoose.Schema({
  id_round: {
    type: mongoose.Types.ObjectId,
    ref: "rounds",
  },
  scode: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("RoundStat", roundStactSchema);
