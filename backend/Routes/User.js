const router = require("express").Router();
const Users = require("../Models/User.model");

router.route("/").get((req, res) => {
  Users.find().then(data => {
    res.status(200).json({data})
  })
});

router.route("/").post((req, res) => {
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
router.route("/analyse").get((req, res) => {
  let userData;
  Users.find().then((data) => {
    userData = data;

    // Run the diagnosis
    // res.status(200).json({ msg: userData });
    
  });
});

router.route("/analyse").post((req, res)=> {
  let currentUser;
  let currentIdentifier = req.body.identifier;
  let hasCovid = false;
  Users.findOne({uniqueIdentifier: currentIdentifier}).then((data)=> {
    currentUser = data;
  }).catch(err => {
    // do something
     console.log("An error occured") 
    }
  )

  Users.find({uniqueIdentifier: {$ne: currentIdentifier}}).then((data)=> {
    // res.json(data)
  data.forEach(person => {
  diffLong = [];
  diffLat = [];
    // Function
  function getDifference(description, arr1, arr2, long) {
    console.log(description);
      for (let i = 0; i < arr1.length; i++) {
      for (let p = 0; p < arr2.length; p++) {
        console.log(arr1[i], arr2[p]);
        console.log(Math.sqrt(Math.pow(Math.abs(arr1[i] - arr2[p]), 2)));

       if (long) {
          diffLong.push(Math.pow(Math.abs(arr1[i] - arr2[p]), 2));
        } else {
          diffLat.push(Math.pow(Math.abs(arr1[i] - arr2[p]), 2));
        }
      }
    }
  }

  function compareDistance(long, lat) {
    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < lat.length; j++) {
        console.log(Math.sqrt(long[i] + lat[j]));
        if (Math.sqrt(long[i] + lat[j]) < 0.05) {
          console.log("You have been in contact with a covid patient");
          return true 
        } else {
          console.log("You are safe");
          return false
        }
      }
    }
  }
  // End of Added code
  // -- The x-values
  getDifference("latitudinal values", currentUser.longitude ,person.longitude, false);

  // -- The Y-values
  getDifference("longitudinal values", currentUser.latitude, person.latitude, true);

  if(!hasCovid) {
    hasCovid = compareDistance(diffLong, diffLat);
  }

  })
    res.status(200).json({msg: hasCovid})
  }).catch(err => {
    res.status(500).json({msg: `Error: ${err}` })
  })
})

// Updating status
router.route("/:id").put((req, res)=> {
    // let oldUser;
    //    Users.findOne({uniqueIdentifier: req.params.id}).then(data => {
    //      oldUser = data;
         
    // }).catch(err => res.status(500).json({err}))

})

module.exports = router;
