// Import the Blogpost and User models
const Blogpost = require("./Blogpost");
const User = require("./User");

// Create associations
User.hasMany(Blogpost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blogpost.belongsTo(User, {
  foreignKey: "user_id",
});

// Export the models
module.exports = { User, Blogpost };
