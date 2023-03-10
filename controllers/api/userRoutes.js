const user = require("express").Router();
const { BlogPost, User } = require("../../models");
const withAuth = require("../../helpers/auth");

// GET all users
user.get("/", (req, res) => {});

// GET a single user and all blog posts
user.get("/:id", (req, res) => {});

// POST a new user
user.post("/", withAuth, (req, res) => {});

module.exports = user;
