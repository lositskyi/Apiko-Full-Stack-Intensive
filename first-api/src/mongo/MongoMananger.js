const mongoose = require('mongoose');

class MongoManager {
    constructor (config) {
        this._config = config;
    }
    getMongoUrl() {
        return this._config.MONGO_URI;
    }
    connect() {
        return mongoose.connect(this.getMongoUrl());
    }
}

module.exports = { MongoManager };