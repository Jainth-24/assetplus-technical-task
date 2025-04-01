const Post = require('../../models/Post');

var router = require('express').Router();
const upload = multer({ dest: 'uploads/' });

// @AssetPlus: This is a sample get request
router.get('/', async (req, res) => {
  var posts = await Post.find();
  return res.send(posts);
});

// @AssetPlus: Add other routes here
router.post('/', upload.single('coverImg'), async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  return res.send(post);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndUpdate(id, req.body);
  return res.send(req.body);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  return res.send('Deleted Successfully');
});
module.exports = router;
