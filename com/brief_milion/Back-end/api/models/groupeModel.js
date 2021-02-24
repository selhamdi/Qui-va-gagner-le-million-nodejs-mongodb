const mongoose = require("mongoose");
const participant = require('./participant');
const schemaGroupe = new mongoose.Schema(
  {
   groupe_code:
    {
      type: String,
      required: true,
    }, 
    id_participant: 
    [
      {
       type:mongoose.Schema.Types.ObjectId,
       ref:'Participant'
      }
    ]
  }
);
var Groupe = module.exports = mongoose.model("Groupe", schemaGroupe);
module.exports.get = function (callback, limit) {
 Groupe.find(callback).limit(limit);
}