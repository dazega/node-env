const { Router } = require('express');
const userServices = require('../services/user');

const router = Router();

router.get('/', async (req, res) => {
    await userServices.getUser();
    return res.send('Root get').status(200);
})

module.exports = router
