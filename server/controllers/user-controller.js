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
  
  // Create a new User -- sign up
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

  // Login a User
  const login = async (req, res) => {
    try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({
        where: {
          email: req.body.user_email,
        },
      });
      
      // If no user exists with that email address, respond with an error
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      // Verify the posted password with the password store in the database
      const userDataPlain = userData.get({ plain: true });
      const validPassword = await userData.checkPassword(req.body.user_ps);
  
      // If the password doesn't match, respond with an error
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      // If the user exists and the password is correct, save the session and set the loggedIn flag to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userid = userDataPlain.id;
      });
      
      // Respond with a success message
      res.status(200).json({ user: userDataPlain, message: 'You are now logged in!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  // Logout a User
  const logout = async (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  };
      

module.exports = {
    getSingleUser,
    createUser,
    login,
    logout
}
