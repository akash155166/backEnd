const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
   name: {
      type: String
   },
   lastName: {
    type:String
   },
   email: {
      type: String
   },
   dob: {
      type: String
   },
   gender: {
    type: String
    },
   phoneNumber: {
      type: Number
   },
   password: {
      type: String
   }
}, {
   collection: 'users'
})
module.exports = mongoose.model('User', User)