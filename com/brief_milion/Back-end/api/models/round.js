const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema({
  id_group_members: {
    type: mongoose.Types.ObjectId,
    ref: "Groupe",
  },
  id_question: {
    type: mongoose.Types.ObjectId,
    ref: "Question",
  },
  id_question_token: {
    type: mongoose.Types.ObjectId,
    ref: "QuestionToken",
  },
  is_answered: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Round", roundSchema);