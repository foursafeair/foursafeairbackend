const express = require("express");
const router = express.Router();
const path = require("path");

const { signup, signin, signout } = require(path.join(
  __dirname,
  "../controllers/auth"
));
const { userSignupValidator } = require(path.join(__dirname, "../validator"));

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

// router.get("/hello", requireSigning, (req, res) => {
//   res.send("hello there");
// });

module.exports = router;
