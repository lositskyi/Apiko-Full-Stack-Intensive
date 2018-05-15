const {_} = require('lodash');
const { helpers: {sendList} } = require('../../middleware');

const list = ({ Vote }, { config }) => async (req, res, next) => {
    let {limit, skip, positive, negative} = req.query;
    skip = skip ? parseInt(skip, 10) : 0;
    limit = limit ? parseInt(limit, 10) : 100;

    const query = {};

    if (positive) {
        _.extend(query, {isPositive: true});
    } else if (negative) {
        _.extend(query, {isPositive: false});
    }

    try {
        const votes = await Vote.find(query)
            .skip(skip)
            .limit(limit)
            .sort({createdAt: -1});

        sendList(res, {votes});
    } catch (err) {
        next(err);
    }
}

module.exports = list;