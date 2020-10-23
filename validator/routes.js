const { Router } = require('express');
const router = Router();
const validatorRoutes = require('./services');

router.get('/', validatorRoutes.profile);


module.exports = router;