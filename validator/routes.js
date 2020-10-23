const { Router } = require('express');
const router = Router();
const validatorRoutes = require('./services');

router.get('/', validatorRoutes.validate);
router.post('/', validatorRoutes.check);


module.exports = router;