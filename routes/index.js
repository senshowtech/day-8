const express = require("express");
const router = express.Router();
const {
  blogCreateproject,
  blogAdd,
  blogData,
  blogDetail,
  blogDelete,
  blogEdit,
  blogEditdetail,
  blogContact,
} = require("../controller/blog.js");

router.get("/", blogData);
router.get("/contact", blogContact);
router.get("/add-project", blogCreateproject);
router.get("/detail-project/:id", blogDetail);
router.get("/edit-project/:id", blogEditdetail);
router.get("/delete-project/:id", blogDelete);
router.post("/create-project", blogAdd);
router.post("/edit-project", blogEdit);

module.exports = router;
