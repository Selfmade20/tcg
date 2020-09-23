const router = require("express").Router();
const Customer = require("../model/customer");

router.post("/capture", async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    surname: req.body.surname,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    question: req.body.question,
  });

  try {
    const savedCustomer = await customer.save();
    return res.send(savedCustomer);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.send(customer);
  } catch (error) {}
  res.send(error);
});

module.exports = router;
