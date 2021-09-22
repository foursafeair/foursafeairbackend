exports.userSignupValidator = (req, res, next) => {
  req.check("name", "Namn är obligatoriskt").notEmpty();
  req
    .check("email", "Email måste vara mellan 3-32 tecken")
    .matches(/.+\@.+\..+/)
    .withMessage("Email mpste innehålla @")
    .isLength({ min: 4, max: 32 });
  req.check("password", "Lösenord är obligatoriskt").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Lösenordet måste innehålla minst 6 tecken")
    .matches(/\d/)
    .withMessage("Lösenordet måste innehålla en siffra");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
