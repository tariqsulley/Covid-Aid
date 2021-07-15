const router = require("express").Router();
const Users = require("../Models/User.model");

router.route("/").get((req, res) => {});

router.route("/").post((req, res) => {
  console.log(body);
  let newUser = new Users({
    uniqueIdentifier: req.body.uniqueIdentifier,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  });

  newUser
    .save()
    .then(() => {
      res.status(201).json({ msg: req.body });
    })
    .catch((err) => res.status(500).json("Internal Error"));
});

module.exports = router;
