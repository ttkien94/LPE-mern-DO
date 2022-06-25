const express = require("express");
const rootRouter = express.Router();

// import Router
const { userRouter } = require("./user.router");
const { authRouter } = require("./auth.router");
const { categoryRouter } = require("./category.router");
const { productRouter } = require("./product.router");
const { topicRouter } = require("./topic.router");
const { blogRouter } = require("./blog.router");

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/category", categoryRouter);
rootRouter.use("/product", productRouter);
rootRouter.use("/topic", topicRouter);
rootRouter.use("/blog", blogRouter);

rootRouter.get("/demo", (req, res) => {
  return res.send({
    status: "success",
    data: "Thành công",
  });
});

module.exports = {
  rootRouter,
};
