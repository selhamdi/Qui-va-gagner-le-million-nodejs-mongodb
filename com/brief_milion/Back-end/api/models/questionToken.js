const mongoose = require("mongoose");

const questionTokenSchema = new mongoose.Schema({
  id_question: {
    type: mongoose.Types.ObjectId,
    ref: "questions",
  },
  id_participant: {
    type: mongoose.Types.ObjectId,
    ref: "participant",
  },
  participant_answer: {
    type: String,
  },
});

module.exports = mongoose.model("QuestionToken", questionTokenSchema);