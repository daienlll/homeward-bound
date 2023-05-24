const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const notificationRoutes = require('./notificationRoutes');

router.use('/users', userRoutes);
router.use('/items', petRoutes);
router.use('/notifications', notificationRoutes);

module.exports = router;