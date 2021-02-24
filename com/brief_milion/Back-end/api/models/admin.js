const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    }, 
    password: {
        type: String,
        required: true,
      },
    status : {
        type:Boolean,
        default:false
      }
   
  }
);

const UserEx = mongoose.model("User", User);
module.exports = UserEx;