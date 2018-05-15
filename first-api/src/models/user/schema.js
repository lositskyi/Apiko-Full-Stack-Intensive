const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserProfileSchema = {
    fullName: String,
    post: String,
}

const UserServicesSchema = {
    password: {
        bcrypt: String,
    },
    google: {
        fullName: {
            type: String,
            lowercase: true,
        },
        accessToken: String,
        refreshToken: String,
    },
}

const Schema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 10,
        required: true,
    },
    profile: UserProfileSchema,
    services: UserServicesSchema,
});

module.exports = Schema;