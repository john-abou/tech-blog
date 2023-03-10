const blogpost = require("express").Router();
const { BlogPost, User } = require("../../models");
const withAuth = require("../../utils/helpers");

// POST a new blog post
blogpost.post("/", withAuth, (req, res) => {});

module.exports = blogpost;
