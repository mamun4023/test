const multer = require("multer");

const multerConfigure = multer.diskStorage({
   destination: "./images/movie",
   filename: (res, file, cb) => {
      let fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
   },
});

const upload = multer({ storage: multerConfigure });

module.exports = upload;
