const router = require("express").Router();
const User = require("../model/User");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    IDnumber: req.body.IDnumber,
    address: req.body.address,
  });

  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
