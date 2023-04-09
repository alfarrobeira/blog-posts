import Blog from "../models/blogModel.js";

const createBlogPost = async(req, res) => {
    try {
        const { author, text, topic, rating } = req.body;
        const newPost = await Blog.create({
            author,
            text,
            topic,
            date: new Date(),
            rating,
        });
        res.json(newPost);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

const getBlogPosts = async(req, res) => {
    try {
        // find() returns all entries; optionally limit the number of entries returned
        const posts = await Blog.find();//.limit(3);

        res.json(posts);
    } catch(err) {
            res.status(500).json({ error: err.message });
    }
}

const getBlogPostsByAuthor = async(req, res) => {
    try {
        const { author } = req.params;
        const posts = await Blog.find({ author });

        if (!posts.length) {
            return res.status(404).json({ message: "No entries found."})
        }
        res.json(posts);
    } catch(err) {
            res.status(500).json({ error: err.message });
    }
}

const rateBlogPost = async(req, res) => {
    try {
        const { id } = req.params;
        const { rating } = req.body;
        const ratedPost = await Blog.findByIdAndUpdate(
            { 
                _id: id 
            }, 
            { 
                rating: rating 
            },
            { 
                new: true, 
                runValidators: true
            });
            // rem: (min/max) validation runs by default only for creation 
            // - for editing it needs to be explicitely activated
        res.json(ratedPost);
    } catch(err) {
            res.status(500).json({ error: err.message });
    }
}

const deleteBlogPostById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Blog.findByIdAndDelete(
            { _id: id }
        );
        if (!deletedPost) {
            res.status(500).json({ message: "Post not found."})
        }
        return res.json(deletedPost);
    } catch(err) {
            res.status(500).json({ error: err.message });
    }
}


export { getBlogPosts, createBlogPost, getBlogPostsByAuthor, rateBlogPost, deleteBlogPostById }