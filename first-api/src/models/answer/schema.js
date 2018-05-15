const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = new mongoose.Schema({
    _id: ObjectId,
    title: {
        type: String,
        minlength: 5,
        required: true,
    },
    description: {
        type: String,
        minlength: 10,
        required: true,
    },
    qustionId: {
        type: ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    createdBy: {
        type: ObjectId,
        required: true,
    }
});

module.exports = Schema;