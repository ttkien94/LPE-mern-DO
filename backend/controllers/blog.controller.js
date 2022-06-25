const { Blog } = require("../models/blog.model");
const { Topic } = require("../models/topic.model");
const { config } = require("../config");
const fs = require("fs");
const { listenerCount } = require("process");
let multer = require("multer");
let upload = multer();
const getAll = async (req, res) => {
  console.log("Run GetAll Blog Function");
  try {
    const list = await Blog.find({
      blogStatus: true,
    })
      .populate({
        path: "author",
        select: { name: 1, _id: 1, avatar: 1, email: 1 },
      })
      .populate({
        path: "topicId",
        select: { name: 1, _id: 1 },
      })
      .sort({ createdAt: -1 })
      .exec();

    return res.status(200).send({
      status: "Success",
      data: list,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};
const getBlogId = async (req, res) => {
  try {
    console.log("Run getBlogId Function");
    // console.log("req.query:", req.query.blog_id);

    var id = req.query.blog_id;
    var ObjectId = require("mongodb").ObjectId;
    var o_id = new ObjectId(id);
    const list = await Blog.find({ _id: o_id });
    // .populate({
    //   path: "author",
    //   select: { name: 1, _id: 1, avatar: 1, email: 1 },
    // })
    // .populate({
    //   path: "topicId",
    //   select: { name: 1, _id: 1 },
    // })
    // .sort({ createdAt: -1 })
    // .exec();
    // console.log(list);
    return res.status(200).send({
      status: "Success",
      data: list,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};
const getBlogSpotlight = async (req, res) => {
  console.log("Run getBlogSpotlight  Function");
  try {
    const list = await Blog.find({
      spotlight: true,
    })
      .populate({
        path: "author",
        select: { name: 1, _id: 1, avatar: 1, email: 1 },
      })
      .populate({
        path: "topicId",
        select: { name: 1, _id: 1 },
      })
      .sort({ createdAt: -1 })
      .exec();

    return res.status(200).send({
      status: "Success",
      data: list,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};

const getBlogStatus = async (req, res) => {
  console.log("Run getBlogStatus  Function");
  try {
    const list = await Blog.find({
      blogStatus: false,
    })
      .populate({
        path: "author",
        select: { name: 1, _id: 1, avatar: 1, email: 1 },
      })
      .populate({
        path: "topicId",
        select: { name: 1, _id: 1 },
      })
      .sort({ createdAt: -1 })
      .exec();

    return res.status(200).send({
      status: "Success",
      data: list,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    console.log("Run updateBlog Function");
    const { file, user, body } = req;
    // console.log("user:", user);
    console.log("req:", req);
    const obj = JSON.parse(JSON.stringify(req.body));
    const { _id, topicId, title, content, url, spotlight, blogStatus, cover } =
      obj;

    console.log(obj);
    // console.log("title:", title);
    // console.log("file:", file);
    const topic = await Topic.findById(topicId).exec();
    // Check topic by topicId
    if (!topic) {
      return res.status(400).send({
        status: "failed",
        message: "Error can't find topic",
      });
    }
    var check = fs.existsSync(cover) && fs.lstatSync(cover).isDirectory();
    console.log("check:", check);
    if (check === true) {
      cover = `${file.path}`;
    }
    let updateBlog = {
      topicId: topicId,
      title: title,
      content: content,
      url: url,
      spotlight: spotlight,
      blogStatus: blogStatus,
      cover: cover,
    };
    console.log("updateBlog:", updateBlog);
    // await newBlog.save();
    // new: true sẽ trả kết quả nếu thành công về
    // blogUpdateCondition must be Object

    var ObjectId = require("mongodb").ObjectID;
    updatedBlog = await Blog.findOneAndUpdate(
      { _id: ObjectId(_id) },
      updateBlog,
      {
        new: true,
      }
    );
    console.log("updatedBlog:", updatedBlog);
    // User not authorised to, update blog or post not found
    if (!updatedBlog) {
      return res.status(401).json({
        status: "false",
        message: "User not authorised to update blog or post not found",
      });
    }

    return res.status(200).send({
      status: "Success",
      message: "Update Blog successfully!",
      blog: updateBlog,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      message: error,
    });
  }
};
const updateBlogSpotlight = async (req, res) => {
  console.log("Run updateBlogSpotlight = true  Function");
  const _id = req.body.blog_id;
  console.log("_id:", _id);

  try {
    const updateBlog = await Blog.findOneAndUpdate(
      { _id: _id },
      {
        spotlight: req.body.spotlight,
      },
      { new: true }
    );
    if (!updateBlog) {
      return res.status(401).json({
        success: false,
        message: " post not found",
      });
    }

    console.log(updateBlog);
    // All good
    return res.status(200).send({
      status: " Update Success",
      data: updateBlog,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};

const updateBlogStatus = async (req, res) => {
  console.log("Run updateBlogStatus = true  Function");
  const _id = req.body.blog_id;
  console.log("_id:", _id);
  console.log("blogStatus:", req.body.blogStatus);
  try {
    const updateBlog = await Blog.findOneAndUpdate(
      { _id: _id },
      {
        blogStatus: req.body.blogStatus,
      },
      { new: true }
    );
    if (!updateBlog) {
      return res.status(401).json({
        success: false,
        message: " post not found",
      });
    }

    console.log(updateBlog);
    // All good
    return res.status(200).send({
      status: " Update Success",
      data: updateBlog,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};

// const getAllClient = async (req, res) => {
//   try {
//     const list = await Blog.find({
//       blogStatus: true,
//     })
//       .select({ content: 0 })
//       .populate({
//         path: "author",
//         select: { name: 1, _id: 1, avatar: 1, email: 1 },
//       })
//       .populate({
//         path: "topicId",
//         select: { name: 1, _id: 1 },
//       })
//       .sort({ createdAt: -1 })
//       .exec();

//     return res.status(200).send({
//       status: "Success",
//       data: list,
//     });
//   } catch (error) {
//     return res.status(500).send({
//       status: "failed",
//       error,
//     });
//   }
// };

const getBlogListTopicId = async (req, res) => {
  const { topic_Id } = req.query;
  console.log("topic_Id - ", topic_Id);

  // const TopicList = Topic.aggregate([
  //   {
  //     $lookup: {
  //       from: "blogs",
  //       localField: "_id",
  //       foreignField: "topicId",
  //       as: "TOPIC_INFO",
  //     },
  //   },
  //   {
  //     $unwind: "TOPIC_INFO",
  //   },
  // ]).pretty();

  try {
    console.log("1");
    const BlogListTopicId = await Blog.filter({
      topicId: ObjectId("621c789f3e214b0013593e50"),
    });
    console.log("BlogListTopicId:", BlogListTopicId);
    return res.status(200).send({
      status: "Success",
      data: BlogListTopicId,
    });
  } catch (error) {
    console.log("2");
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};
const uploadImage = (req, res) => {
  const { file } = req;

  if (!file) {
    res.status(400).send({
      status: "failed",
      message: "Can't find user",
    });
  } else {
    res.status(200).send({
      status: "success",
      url: file.path,
    });
  }
};

const create = async (req, res) => {
  const { file, user, body } = req;
  const { topicId, title, content, url, spotlight, blogStatus } = body;
  console.log(req.body);
  try {
    const topic = await Topic.findById(topicId).exec();

    // Check topic by topicId
    if (!topic) {
      return res.status(400).send({
        status: "failed",
        message: "Error can't find topic",
      });
    }

    const urlImage = `${file.path}`;

    const newBlog = new Blog({
      topicId,
      title,
      content,
      url,
      spotlight,
      blogStatus,
      cover: urlImage,
      author: user._id,
    });

    await newBlog.save();

    return res.status(200).send({
      status: "Success",
      message: "Create Blog successfully!",
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  const { url } = req.params;

  try {
    const detail = await Blog.findOne({
      url: url,
    })
      .populate({
        path: "author",
        select: { name: 1, _id: 1, avatar: 1, email: 1 },
      })
      .populate({
        path: "topicId",
        select: { name: 1, _id: 1 },
      })
      .exec();

    return res.status(200).send({
      status: "Success",
      data: detail,
    });
  } catch (error) {
    return res.status(500).send({
      status: "failed",
      error,
    });
  }
};

const remove = async (req, res) => {
  try {
    console.log("Run Remove Blog Function");
    const _id = req.body.blog._id;
    const blogDelete = await Blog.findOneAndDelete({
      _id: _id,
    });
    console.log("id:", _id);
    console.log("blogDelete:", blogDelete);
    fs.unlinkSync(req.body.blog.cover);
    const content = req.body.blog.content;
    // console.log("centent=", content);
    const jsonConvert = JSON.parse(content);
    // console.log("jsonConvert:", jsonConvert);

    jsonConvert.map((item, index) => {
      return item.type === "image" ? fs.unlinkSync(item.data.file.url) : "";
    });

    res.status(200).send({
      status: "Success",
      data: _id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const edit = (req, res) => {
  const { file, user, body } = req;
  const { topicId, title, content, url, spotlight, blogStatus } = body;
};

module.exports = {
  uploadImage,
  create,
  edit,
  getAll,
  getBlogId,
  getDetail,
  remove,
  getBlogListTopicId,
  getBlogSpotlight,
  getBlogStatus,
  updateBlog,
  updateBlogSpotlight,
  updateBlogStatus,
};
