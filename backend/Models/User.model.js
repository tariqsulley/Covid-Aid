const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    uniqueIdentifier: {type: String,},
    longitude: {type: Array},
    latitude: {type: Array},
    hasCovid: {type: Boolean, default: false,},
})

let Users = mongoose.model("Users", userSchema);
module.exports = Users;
