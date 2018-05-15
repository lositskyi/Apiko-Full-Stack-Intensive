const {_} = require('lodash');
const { helpers: {sendUpdated} } = require('../../middleware');

const update = ({Answer}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const answer = await Answer.findOne({_id});
        _.exted(answer, req.body);
        await answer.save();
        sendUpdated(res, {answer});
    } catch (err) {
        next(err);
    }
}

module.exports = update;