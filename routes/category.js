const express = require("express");
const router = express.Router();
const path = require("path");

const { create, categoryById, read, remove, update, list } = require(path.join(
  __dirname,
  "../controllers/category"
));
const { requireSigning, isAuth, isAdmin } = require(path.join(
  __dirname,
  "../controllers/auth"
));
const { userById } = require(path.join(__dirname, "../controllers/user"));

router.get("/category/:categoryId", read);
router.post(
  "/category/create/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  create
);
router.put(
  "/category/:categoryId/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  update
);
router.delete(
  "/category/:categoryId/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  remove
);
router.get("/categories", list);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
