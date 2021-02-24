// const router = require("express").Router();
// let User = require("../models/participant_model");


// router.route("/").get((req, res) => {
//   User.find()
//   .then((User) => res.json(User))
//   .catch((err) => res.status(400).json("Error :" + err));
// });

// router.route("/add").post( (req, res) => {

 
//     const name = req.body.name;
//     const phone = req.body.phone;
//     const password = req.body.password;

//     const userPush = new User({
//       name,
//       phone,
//       password

//     });

//     userPush
//       .save()
//       .then(() => res.json("User successfully added"))
//       .catch((err) => res.status(400).json("Error :" + err));
// });


// module.exports = router;

// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API participant Its Working',
    });
});
// Import contact controller
var participantController = require('../controllers/particiantControlller');
// // Dossier routes
router.route('/add')
    .post(participantController.new)
    .get(participantController.index);
    
router.route('/update/:id')   
    .patch(participantController.update);

// Export API routes
module.exports = router;