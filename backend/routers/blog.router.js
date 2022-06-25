const express = require("express");
const blogRouter = express.Router();

const {
  uploadImageSingle,
  removeImage,
  CheckFileCoverBlog,
  UpdateImageSingle,
} = require("../middlewares/upload/upload-image.middleware");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");

const {
  uploadImage,
  create,
  remove,
  edit,
  getAll,
  getBlogId,
  getDetail,
  getBlogListTopicId,
  getBlogSpotlight,
  getBlogStatus,
  updateBlog,
  updateBlogSpotlight,
  updateBlogStatus,
} = require("../controllers/blog.controller");

// Upload Image when write blog
blogRouter.post("/upload-image-blog", uploadImageSingle("blog"), uploadImage);

// create blog
blogRouter.post(
  "/create-post",
  authenticate,
  authorize(["admin"]),
  uploadImageSingle("blog"),
  create
);

// delete blog
blogRouter.delete("/delete-post", authenticate, authorize(["admin"]), remove);

// All blog list for Client - visible post state == false
// blogRouter.get("/getAllClient", getAllClient);
// All blog list for Admin - visible post state == false
blogRouter.get("/", getAll);
blogRouter.get("/blog_id", getBlogId);
blogRouter.get("/spotlight", getBlogSpotlight);
blogRouter.get("/status", getBlogStatus);

// Get Blog order by TopicId
blogRouter.get("/topicId", getBlogListTopicId);

// All blog list
blogRouter.get("/:url", getDetail);
blogRouter.put(
  "/update-post",
  authenticate,
  authorize(["admin"]),
  uploadImageSingle("blog"),
  updateBlog
);
blogRouter.put(
  "/spotlight",
  authenticate,
  authorize(["admin"]),
  updateBlogSpotlight
);
blogRouter.put("/status", authenticate, authorize(["admin"]), updateBlogStatus);

// Note: k viet code duoi nay bi loi chua xac dinh

// Edit blog
// blogRouter.put("/edit", authenticate, authorize(["admin"]), edit);

// Find post by topic

// Find post by keyword

// Get post id
module.exports = {
  blogRouter,
};
