const router = require('express').Router();
const messageRoutes = require('./messageRoute');

router.use('/contact', messageRoutes);

module.exports = router;