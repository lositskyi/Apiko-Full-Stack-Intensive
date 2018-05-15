const { NotAcceptable } = require('rest-api-errors');
const { helpers: {sendCreated} } = require('../../middleware');
const _ = require('lodash');

const create = ({Vote}, {config}) => async (req, res, next) => {
    try {
        const vote = new Vote();

        if (!req.body.title) {
            throw new NotAcceptable(405, 'Should by title');
        }
        _.extend(vote, req.body);
        await vote.save();
        sendCreated(res, {vote});
    } catch (err) {
        next(err);
    }
};

module.exports = create;