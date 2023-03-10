const views = require("express").Router();
const { User, Blogpost } = require("../models");
const withAuth = require("../helpers/auth");

// GET all blog posts and load the home page
views.get("/", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: {
        model: [User],
        attributes: ["name"],
      }
    });
    const blogpost = blogpostData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", blogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single blog post and load the blogpost specific page
views.get("/:id", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id);
    const blog = blogpostData.map((b) => b.get({ plain: true }));

    res.render("blogpost", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET request to login page
views.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = views;
