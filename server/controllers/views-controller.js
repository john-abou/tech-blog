const { Blogpost, User } = require('../models');

// GET request to login page
const loginPage = async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
};

// GET all blog posts and load the home page
const homepage = async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: {
        model: User,
        attributes: ["name"],      
      }
    });
    const blogposts = blogpostData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogposts, 
      loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET a single blog post and load the blogpost specific page
const singleBlogPage = async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ["name"],
      }
    });
    const blog = blogpostData.get({ plain: true });

    console.log(blog);

    res.render("blogpost", {
      blog,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET a single users posts and load the user specific page
const profilePage = async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.userId);
    const user = userData.map((userD) => userD.get({ plain: true }));

    res.render("profile", {
      user,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  loginPage,
  homepage,
  singleBlogPage,
  profilePage
};
