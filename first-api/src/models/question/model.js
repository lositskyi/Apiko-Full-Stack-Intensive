const mongoose = require('mongoose');
const Schema = require('./schema');

const Model = mongoose.model('Questions', Schema);

module.exports = Model;