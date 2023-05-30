const router = require('express').Router();
const {
    loginPage,
    homepage,
    singleBlogPage,
    profilePage
    // userPage
} = require('../controllers/views-controller')
const withAuth = require('../helpers/auth')

// GET request to login page
router.route('/login').get(loginPage);

// GET requests to load homepage
router.route('/').get(homepage);
router.route('/homepage').get(homepage);

router.route('/blogpost/:id').get(withAuth, singleBlogPage)

router.route('/user/:userId').get(withAuth, profilePage)
  
module.exports = router ;