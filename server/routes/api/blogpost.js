const router = require('express').Router();
const  {
    createBlogpost,
    deleteBlogpost,
    updateBlogpost
} = require('../../controllers/blogpost-controller')

// /api/blogpost
router.route('/').post(createBlogpost);

// /api/blogpost/:id
router.route('/:id').delete(deleteBlogpost).put(updateBlogpost);

module.exports = router;