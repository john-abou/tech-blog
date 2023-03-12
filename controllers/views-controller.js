// GET request to login page
const login = async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
};

module.exports = {login};
