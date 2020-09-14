const router = require("express").Router();
const User = require("../model/User");

router.post("/capture", async (req, res) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    question: req.body.question,
  });
  try {
    const savedInfo = await user.save();
    res.send(savedInfo);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
