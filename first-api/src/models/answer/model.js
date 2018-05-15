const mongoose = require('mongoose');
const Schema = require('./schema');

const Model = mongoose.model('Answers', Schema);

module.exports = Model;