const express = require('express')
const router = express.Router()
const queries = require('./queries')


router.post('/', queries.add);
router.get('/', queries.get);
router.get('/top5', queries.getTop5);


module.exports = {
    router
};