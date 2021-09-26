const express = require("express");
const router = express.Router();
const path = require("path");

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
  listSearch,
} = require(path.join(__dirname, "../controllers/product"));
const { requireSigning, isAuth, isAdmin } = require(path.join(
  __dirname,
  "../controllers/auth"
));
const { userById } = require(path.join(__dirname, "../controllers/user"));

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSigning, isAuth, isAdmin, create);
router.delete(
  "/product/:productId/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  update
);
router.get("/products", list);
router.get("/products/search", listSearch);

router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
