const express = require('express');
const authMiddlewares = require('../middlewares/auth')

const router = express.Router();

router.use(authMiddlewares);


router.get('/', (req, res) => {
  res.send({ ok: true, user: req.userId })
})

module.exports = app => app.use('/projects', router)