const { helpers: {sendOne} } = require('../../middleware');

const get = ({Question}, {config}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const question = await Question.findOne({_id});
        sendOne(res, {question});
    } catch (err) {
        next(err);
    }
};

module.exports = get;