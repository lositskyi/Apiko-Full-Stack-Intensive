const {_} = require('lodash');
const { helpers: {sendList} } = require('../../middleware');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getAnswers = ({ Answer }, { config }) => async (req, res, next) => {
    const {_id} = req.params;
    let {limit, skip, search} = req.query;
    skip = skip ? parseInt(skip, 10) : 0;
    limit = limit ? parseInt(limit, 10) : 100;

    try {
        const query = {
            questionId: ObjectId(_id)
        };

        if (search) {
            _.extend(query, {title: new RegExp(`${search}`, 'i')})
        }
        const answers = await Answer.find(query)
            .skip(skip)
            .limit(limit)
            .sort({_id: -1});

        sendList(res, {answers});
    } catch (err) {
        next(err);
    }
}

module.exports = getAnswers;