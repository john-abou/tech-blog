const { Blogpost, User } = require('../models');

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
        if (!blogData) {
            res.status(404).json({message: 'No blogpost found with this id!'})
            return;
        }
        res.status(200).json({
            message: 'Success! Deleted the post.',
            data: blogData
        })
    } catch (err) {
        res.status(500).json({message: 'server error', error: err})
    }
}

module.exports = {
    createBlogpost,
    deleteBlogpost
}