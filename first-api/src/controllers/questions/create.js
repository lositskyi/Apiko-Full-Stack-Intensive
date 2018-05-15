const { NotAcceptable } = require('rest-api-errors');
const { helpers: {sendCreated} } = require('../../middleware');
const _ = require('lodash');

const create = ({Question}, {config}) => async (req, res, next) => {
    try {
        const question = new Question();

        if (!req.body.title) {
            throw new NotAcceptable(405, 'Should by title');
        }
        _.extend(question, req.body);
        await question.save();
        sendCreated(res, {question});
    } catch (err) {
        next(err);
    }
};

module.exports = create;