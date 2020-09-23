const router = require("express").Router();
const Company = require("../model/company");

router.post("/insert", async (req, res) => {
  const company = new Company({
    name: req.body.name,
    websiteAddress: req.body.websiteAddress,
    physicalAddress: req.body.physicalAddress,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    const savedCompany = await company.save();
    return res.send(savedCompany);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const company = await Company.find();
    res.send(company);
  } catch (error) {}
  res.send(error);
});

module.exports = router;
