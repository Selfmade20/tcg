const router = require("express").Router();
const User = require("../model/User");

router.post("/register", async (req, res) => {
  const user = new User({
   const {name, surname, email, IDnumber, address} = req.body
  });

  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
