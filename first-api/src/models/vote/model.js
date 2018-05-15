const mongoose = require('mongoose');
const Schema = require('./schema');

const Model = mongoose.model('Votes', Schema);

module.exports = Model;