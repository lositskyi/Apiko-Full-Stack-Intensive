const { helpers: {sendDeleted} } = require('../../middleware');

const remove = ({Vote}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const vote = await Vote.findOne({_id});
        await Vote.remove({_id});
        sendDeleted(res, {vote});
    } catch (err) {
        next(err);
    }
};

module.exports = remove;