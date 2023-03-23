const { Blogpost, User } = require('../models');

// GET all blog posts and load the home page
const getBlogposts = async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: {
        model: User,
        attributes: ["name"],      
      }
    });
    const blogposts = blogpostData.map((blog) => blog.get({ plain: true }));
    console.log(blogposts);

    res.render("homepage", {blogposts});
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET a single blog post and load the blogpost specific page
const getSingleBlogpost = async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ["name"],
      }
    });
    const blog = blogpostData.get({ plain: true });

    console.log(blog);

    res.render("blogpost", blog);
  } catch (err) {
    res.status(500).json(err);
  }
};

// POST a blogpost
const createBlogpost = async (req,res) => {
    try{
      console.log(req.body);
        const newBlog = await Blogpost.create({...req.body});
        res.status(200).json({
            message: 'Success! New blogpost created.',
            data: newBlog
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

// DELETE a blogpost
const deleteBlogpost = async (req,res) => {
    try {
        const blogData = await Blogpost.destroy({
            where: {
                id: req.params.id
            }
        })
        res.sstatus(200).json({
            message: 'Success! Deleted the post.',
            data: blogData
        })
    } catch (err) {
        res.status(500).json({message: 'server error', error: err})
    }
}

module.exports = {
    getBlogposts,
    getSingleBlogpost,
    createBlogpost,
    deleteBlogpost
}