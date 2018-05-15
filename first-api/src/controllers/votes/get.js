const { helpers: {sendOne} } = require('../../middleware');

const get = ({Vote}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const vote = await Vote.findOne({_id});
        sendOne(res, {vote});
    } catch (err) {
        next(err);
    }
};

module.exports = get;