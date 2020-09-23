const router = require("express").Router();
const Admin = require("../model/admin");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await Admin.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already Exists!");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const admin = new Admin({
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const admin = await Admin.find();
    res.send(admin);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await Admin.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Email or Password is incorrect");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword)
    return res.status(400).send("Email or Password is incorrect");
  res.send("Logged IN");
});

module.exports = router;
