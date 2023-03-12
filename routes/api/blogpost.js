const router = require('express').Router();
const  {
    getBlogposts,
    getSingleBlogpost,
    createBlogpost,
    deleteBlogpost
} = require('../../controllers/blogpost-controller')

// /api/blogpost
router.route('/').get(getBlogposts).post(createBlogpost);

// /api/blogpost/:id
router.route('/:id').get(getSingleBlogpost).delete(deleteBlogpost);

module.exports = router;