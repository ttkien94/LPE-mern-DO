const multer = require("multer");
const fs = require("fs");
const { config } = require("../../config");
const removeImage = (req, res) => {
  console.log(req.body.blog.cover);
  fs.unlinkSync(`${req.body.blog.cover}`);
};
const CheckFileCoverBlog = (req, res) => {
  const { file } = req;
  const { topicId, title, content, url, spotlight, blogStatus } = req.body;
  console.log("CheckFileCoverBlog run");
  console.log("req.body:", req.body);
  if (!file) {
    console.log("đang xài file cũ");
    console.log("topicId:", topicId);
  } else {
    const urlImage = `${file.path}`;
    console.log(req);
  }
};

const UpdateImageSingle = (req, res) => {
  console.log("run UpdateImageSingle Function");
  const { topicId, title, content, url, spotlight, blogStatus } = req.body;
  const { file } = req;
  console.log("req.body:", req.body);
  // if (!file) {
  //   console.log("đang xài file cũ");
  //   console.log("title:", title);
  // } else {
  //   const urlImage = `${file.path}`;
  //   console.log("content:", content);
  //   console.log("file:", file);
  // }
  // console.log("originalname:", file.originalname);
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, `./public/images/${type}`); // setup chổ cần lưu file
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
  //   },
  // });
  // const upload = multer({
  //   storage: storage,
  //   fileFilter: function (req, file, cb) {
  //     let extensionImageList = [
  //       "image/png",
  //       "image/jpeg",
  //       "image/jpg",
  //       "image/gif",
  //     ]; // Array của mimetype hình ảnh
  //     const check = extensionImageList.indexOf(file.mimetype) === -1; // Tìm index của file nếu có sẽ trả về !== -1, không tồn tại trả về === -1

  //     if (check) {
  //       cb(new Error("extension không hợp lệ"));
  //     }

  //     cb(null, true);
  //   },
  // });
  // return upload.single(type);
  return res.status(401).json({
    status: "false",
    message: "User not authorised to update blog or post not found",
  });
};
const uploadImageSingle = (type) => {
  console.log("run uploadImageSingle Function");
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); // setup chổ cần lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      // const extensionImageList = [".png", ".jpg", ".jpeg"];
      // const extension = file.originalname.slice(-4 | -5);
      // const check = extensionImageList.includes(extension);
      // if (check) {
      //   cb(null, true);
      // } else {
      //   cb(new Error("extension không hợp lệ"));
      // }

      let extensionImageList = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/gif",
      ]; // Array của mimetype hình ảnh
      const check = extensionImageList.indexOf(file.mimetype) === -1; // Tìm index của file nếu có sẽ trả về !== -1, không tồn tại trả về === -1

      if (check) {
        cb(new Error("extension không hợp lệ"));
      }

      cb(null, true);
    },
  });

  return upload.single(type);
};

const uploadImageMultiple = (type, amount) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); // setup chổ cần lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
    },
  });
  const upload = multer({
    storage: storage,
    // fileFilter: function (req, file, cb) {
    //   const extensionImageList = [".png", ".jpg"];
    //   const extension = file.originalname.slice(-4);
    //   const check = extensionImageList.includes(extension);
    //   if (check) {
    //     cb(null, true);
    //   } else {
    //     cb(new Error("extension không hợp lệ"));
    //   }
    // },
  });

  return upload.array(type, amount);
};

module.exports = {
  uploadImageSingle,
  uploadImageMultiple,
  UpdateImageSingle,
  removeImage,
  CheckFileCoverBlog,
};
