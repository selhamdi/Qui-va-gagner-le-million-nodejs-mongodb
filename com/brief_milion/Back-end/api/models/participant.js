const mongoose = require("mongoose");

const schemaParticipant = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
     is_valid: {
      type: Boolean,
      default: "false" 
     },
     online: {
      type: Boolean,
      default: "true"
    },
    password: {
      type: String,
      required: true,
    }
  });


var Participant = module.exports = mongoose.model("Participant", schemaParticipant);
module.exports.get = function (callback, limit) {
 Participant.find(callback).limit(limit);
}