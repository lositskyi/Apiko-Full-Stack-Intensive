const { helpers: {sendOne} } = require('../../middleware');

const get = ({Answer}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const answer = await Answer.findOne({_id});
        sendOne(res, {answer});
    } catch (err) {
        next(err);
    }
};

module.exports = get;