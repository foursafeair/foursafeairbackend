const express = require("express");
const router = express.Router();
const path = require("path");

const { requireSigning, isAuth } = require(path.join(
  __dirname,
  "../controllers/auth"
));
const { userById } = require(path.join(__dirname, "../controllers/user"));
const { generateToken, processPayment } = require(path.join(
  __dirname,
  "../controllers/braintree"
));

router.get(
  "/braintree/getToken/:userId",
  requireSigning,
  isAuth,
  generateToken
);
router.post(
  "/braintree/payment/:userId",
  requireSigning,
  isAuth,
  processPayment
);

router.param("userId", userById);

module.exports = router;
