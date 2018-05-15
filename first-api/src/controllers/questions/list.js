const {_} = require('lodash');
const { helpers: {sendList} } = require('../../middleware');

const list = ({ Question }, { config }) => async (req, res, next) => {
    let {limit, skip, search} = req.query;
    skip = skip ? parseInt(skip, 10) : 0;
    limit = limit ? parseInt(limit, 10) : 100;

    try {
        const query = {};
        if (search) {
            _.extend(query, {title: new RegExp(`${search}`, 'i')})
        }
        const questions = await Question.find(query)
            .skip(skip)
            .limit(limit)
            .sort({_id: -1});

        sendList(res, {questions});
    } catch (err) {
        next(err);
    }
}

module.exports = list;