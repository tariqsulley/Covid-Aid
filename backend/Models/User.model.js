const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
})


let Users = mongoose.model("Users", userSchema);
module.exports = Users;
