const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose); //To implement automatically usermane, hashing, salting & hashed password.

module.exports = mongoose.model('User', userSchema);