
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
  name: {
    type:     String
    // required: [true, "You need to enter a name"]
  },
  email: {
    type:     String
    // required: [true, "Please enter an email"]
  },
  password:   {
    type:     String
    // required: [true, "You need to enter a password"]
  },
  img:        {
    type:     String,
    default:  'http://i.imgur.com/h7sBCDN.png'
  },
  role:      {
    type:     String,
    default:  'user'
  }
}
); //closes userSchema

const User = mongoose.model('User', userSchema);

module.exports = User;
