const express = require("express");
const router = express.Router();
const path = require("path");

const { requireSigning, isAuth, isAdmin } = require(path.join(
  __dirname,
  "../controllers/auth"
));

const { userById, read, update, purchaseHistory } = require(path.join(
  __dirname,
  "../controllers/user"
));

router.get("/secret", requireSigning, (req, res) => {
  res.json({
    user: "got here yay",
  });
});

router.get("/user/:userId", requireSigning, isAuth, read);
router.put("/user/:userId", requireSigning, isAuth, update);
router.get("/orders/by/user/:userId", requireSigning, isAuth, purchaseHistory);

router.param("userId", userById);

module.exports = router;
