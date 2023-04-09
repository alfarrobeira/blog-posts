import { Router } from "express";
import { getBlogPosts, createBlogPost, getBlogPostsByAuthor, rateBlogPost, deleteBlogPostById } from "../controllers/blogController.js";

const blogRoutes = new Router();

blogRoutes.route("/")
    .get(getBlogPosts)
    .post(createBlogPost);

blogRoutes.route("/:author").get(getBlogPostsByAuthor);

blogRoutes.route("/:id")
    .put(rateBlogPost)
    .delete(deleteBlogPostById);

export default blogRoutes;