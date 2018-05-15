const { helpers: {sendDeleted} } = require('../../middleware');

const remove = ({Answer}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const answer = await Answer.findOne({_id});
        await Answer.remove({_id});
        sendDeleted(res, {answer});
    } catch (err) {
        next(err);
    }
};

module.exports = remove;