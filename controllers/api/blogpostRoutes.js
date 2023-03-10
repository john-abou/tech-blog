const blogpost = require("express").Router();
const { BlogPost, User } = require("../../models");
const withAuth = require("../../helpers/auth");

// POST a new blog post
blogpost.post("/", withAuth, (req, res) => {});

module.exports = blogpost;
