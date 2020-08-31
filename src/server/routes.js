const express = require("express");
const Client = require("./db/Clients");
const router = express.Router();

router.get("/clients", async (req, res) => {
  var pageNo = parseInt(req.query.pageNo);
  var size = parseInt(req.query.size);
  if (size && pageNo) {
    const clients = await Client.find({})
      .limit(size)
      .skip((pageNo - 1) * size)
      .exec();
    res.send(clients);
  } else {
    const clients = await Client.find({});
    res.send(clients);
  }
});

router.put("/client", async (req, res) => {
  const client = req.body;
  const updatedClient = await Client.findByIdAndUpdate(client._id, {
    name: client.name,
    surName: client.surName,
    country: client.country,
  });
  res.send(updatedClient);
});

router.put("/update", async (req, res) => {
  const client = req.body;
  console.log(client)
  const updatedClient = await Client.findByIdAndUpdate(client.id, {
    [client.prop]: client.value
  });
  res.send(updatedClient);
});

module.exports = router;
