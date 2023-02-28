const views = require("express").Router();
const { User, Blogpost } = require("../models");
// const withAuth = require("../helpers");

// GET request to homepage/landing page
views.get("/", (req, res) => {});

// GET request to login page
views.get("/login", (req, res) => {});

module.exports = views;
