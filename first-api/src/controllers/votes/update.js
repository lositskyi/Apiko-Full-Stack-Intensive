const {_} = require('lodash');
const { helpers: {sendUpdated} } = require('../../middleware');

const update = ({Vote}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const vote = await Vote.findOne({_id});
        _.exted(vote, req.body);
        await vote.save();
        sendUpdated(res, {vote});
    } catch (err) {
        next(err);
    }
}

module.exports = update;