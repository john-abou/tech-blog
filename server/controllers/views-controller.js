const { Blogpost, User, Comment } = require('../models');

// GET request to login page
const loginPage = async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
};

// GET all blog posts in desc order and load the home page
const homepage = async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: {
        model: User,
        attributes: ["name", "id"],      
      },
      order: [["date_created", "DESC"]]
    });
    const blogposts = blogpostData.map((blog) => blog.get({ plain: true }));

    console.log(blogposts);

    res.render("homepage", {
      blogposts, 
      loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// GET a single blog post and load the blogpost specific page
const singleBlogPage = async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      // Query the blogpost model and include the name of the user and all comments from the Comment model
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["comment_text"],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
      ],
    });
    const blogpost = blogpostData.get({ plain: true });

    res.render("blogpost", {
      blogpost,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// GET a single users posts and load the user specific page
const profilePage = async (req, res) => {
  try {
    const userBlogposts = await Blogpost.findAll({
      where: {
        user_id: req.params.userId,
      },
    });
    console.log(userBlogposts);
    const blogposts = userBlogposts.map((blog) => blog.get({ plain: true }));

    res.render("profile", {
      blogposts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const userPage = async (req, res) => {
  try {
    const userBlogposts = await Blogpost.findAll({
      where: {
        user_id: req.session.userId,
      },
    });
    console.log(userBlogposts);
    const blogposts = userBlogposts.map((blog) => blog.get({ plain: true }));

    res.render("profile", {
      blogposts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = {
  loginPage,
  homepage,
  singleBlogPage,
  profilePage,
  userPage
};
