const router = require("express").Router();
const User = require("../model/User");
const Company = require("../model/Companies");

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

router.post("/registerCompany", async (req, res) => {
  const company = new Company({
    name: req.body.name,
    webAddress: req.body.webAddress,
    physicalAddress: req.body.physicalAddress,
    email: req.body.email,
  });
  try {
    const savedCompany = await company.save();
    res.send(savedCompany);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
