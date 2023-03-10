const views = require("express").Router();
const { User, Blogpost } = require("../models");
const withAuth = require("../helpers");

// GET all blog posts
views.get("/", async (req, res) => {
  const blogpostData = Blogpost.findAll({
    include: [User],
    attributes: ["name"],
  });
  try {
    const blogpostData = await Blogpost.findAll({
      include: [User],
      attributes: ["name"],
    });
    const blogpost = blogpostData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", blogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single blog post
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
views.get("/login", (req, res) => {});

module.exports = views;
