const express = require('express');
const models = require('../models');
const questions = require('../controllers/questions');
const answers = require('../controllers/answers');
const votes = require('../controllers/votes');
const { errorHandler } = require('../middleware');

const initRouters = (config) => {
    const router = express();

    router.use('/questions', questions(models, { config }));
    router.use('/answers', answers(models, { config }));
    router.use('/votes', votes(models, { config }));

    router.use(errorHandler);
    return router;
};

module.exports = initRouters;