const mongoose = require('mongoose');
const Schema = require('./schema');

const Model = mongoose.model('Users', Schema);

module.exports = Model;