const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = new mongoose.Schema({
    _id: ObjectId,
    isPositive: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    answerId: {
        type: ObjectId,
        required: true,
    },
    createdBy: {
        type: ObjectId,
        required: true,
    }
});

module.exports = Schema;