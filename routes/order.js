const express = require("express");
const router = express.Router();
const path = require("path");

const { requireSigning, isAuth, isAdmin } = require(path.join(
  __dirname,
  "../controllers/auth"
));
const { userById, addOrderToUserHistory } = require(path.join(
  __dirname,
  "../controllers/user"
));
const {
  create,
  listOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
} = require("../controllers/order");
const { decreaseQuantity } = require("../controllers/product");

router.post(
  "/order/create/:userId",
  requireSigning,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.get("/order/list/:userId", requireSigning, isAuth, isAdmin, listOrders);
router.get(
  "/order/status-values/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  getStatusValues
);
router.put(
  "/order/:orderId/status/:userId",
  requireSigning,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;
