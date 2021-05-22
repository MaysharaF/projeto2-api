const express = require('express');
const multer = require('multer');
const multerCongig = require('../config/multer');

const router = express.Router();

const Post = require('../models/post');

router.get('/posts', async (req, res) => {
  const posts = await Post.find();

  return res.json(posts)
});

router.post('/posts', multer(multerCongig).single('file'), async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url,

  })
  return res.json(post);
});


router.delete('/posts:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  await post.remove();

  return res.send();
})

module.exports = app => app.use(router)