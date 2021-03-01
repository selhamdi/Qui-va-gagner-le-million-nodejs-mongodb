const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schemaQuestion = new Schema(
  {
 question: {
      type: String,
      required: true,
    },
trueAnswer: {
      type: String,
      required: true,
    },
falseAnswer : 
   [
         {
         type: String,
         required: true,
         },
         {
          type: String,
          required: true,
         },
         {
         type: String,
         required: true,
         }
    ],
    point:{

            default:10,
            type: Number,
            trim: true,
            minlenght: 1,
    }
  });


var Question = module.exports = mongoose.model("Question", schemaQuestion);
module.exports.get = function (callback, limit) {
 Question.find(callback).limit(limit);
}