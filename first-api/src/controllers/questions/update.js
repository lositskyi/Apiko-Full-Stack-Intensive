const {_} = require('lodash');
const { helpers: {sendUpdated} } = require('../../middleware');

const update = ({Question}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const question = await Question.findOne({_id});
        _.exted(question, req.body);
        await question.save();
        sendUpdated(res, {question});
    } catch (err) {
        next(err);
    }
}

module.exports = update;