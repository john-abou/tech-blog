// Import the Blogpost and User models
const Blogpost = require("./Blogpost");
const User = require("./User");
const Comment = require('./Comment');

// User/Blog associations
User.hasMany(Blogpost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Blogpost.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment/User associations
Comment.belongsTo(User, {
  foreignKey: "user_id"
});
User.hasMany(Comment, {
  foreignKey: "user_id",
})

// Blogpost/Comment associations
Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id'
})
Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id'
})


// Export the models
module.exports = { User, Blogpost, Comment };
