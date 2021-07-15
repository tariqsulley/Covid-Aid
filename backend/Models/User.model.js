const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let userSchema = new Schema({
//     uniqueIdentifier: String,
//     longitude: Array,
//     latitude: Array,
//     hasCovid: Boolean,

// })
let userSchema = new Schema({
    name: String, 
})

let Users = mongoose.model("Users", userSchema);
module.exports = Users;
