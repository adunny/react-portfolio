const router = require('express').Router();
const Message = require('../../models/Message');

router.post('/', async ({ body }, res) => {
    const message = await Message.create(body);
    if (!message) {
        return res.status(400).json({ message: 'something went wrong' });
    }
    console.log(message)
    res.json(message);
});

module.exports = router;