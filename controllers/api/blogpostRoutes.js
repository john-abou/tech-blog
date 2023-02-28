const blogpost = require("express").Router();
const { BlogPost, User } = require("../../models");
// const withAuth = require("../../utils/auth");

// GET all blog posts
blogpost.get("/", (req, res) => {});

// GET a single blog post
blogpost.get("/:id", (req, res) => {});

// POST a new blog post
// blogpost.post("/", withAuth, (req, res) => {});

module.exports = blogpost;
