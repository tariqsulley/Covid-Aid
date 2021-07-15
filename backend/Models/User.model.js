const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    uniqueIdentifier: {type: String,},
    longitude: Array,
    latitude: Array,
    hasCovid: {type: Boolean, default: false,},
})

let Users = mongoose.model("Users", userSchema);
module.exports = Users;
