const { where } = require('sequelize');
const { Blogpost, User } = require('../models');
  
  // GET a single User's posts and load the User specific page
  const getSingleUser = async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      const user = userData.map((userD) => userD.get({ plain: true }));
  
      res.render("User", user);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  // POST a User
  const createUser = async (req,res) => {
      try{
          const newUser = await User.create(req.body);
          const newUserPlain = newUser.get({plain: true});
          
          req.session.save(() => {
            req.session.loggedIn = true,
            req.session.userid = newUserPlain.id;
          })

          res.render('/homepage', {
            newUserPlain,
            loggedIn: req.session.loggedIn
          })
      } catch (err) {
          res.status(500).json(err);
      }
  }

module.exports = {
    getSingleUser,
    createUser
}
