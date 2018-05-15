const { helpers: {sendDeleted} } = require('../../middleware');

const remove = ({Question}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const question = await Question.findOne({_id});
        await Question.remove({_id});
        sendDeleted(res, {question});
    } catch (err) {
        next(err);
    }
};

module.exports = remove;