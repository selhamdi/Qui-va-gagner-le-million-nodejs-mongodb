const router = require("express").Router();
let User = require("../models/admin");
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/adminToken')


router.route("/").get(auth,(req, res) => {
  User.find()
  .then((User) => res.json(User))
  .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post(auth, (req, res) => {


        const name = req.body.name;
        const phone = req.body.phone;
        const password = req.body.password;

       const userPush = new User({
      name,
      phone,
      password

    });

    userPush
      .save()
      .then(() => res.json("User successfully added"))
      .catch((err) => res.status(400).json("Error :" + err));


    

});

router.route('/login').post((req,res)=>{

        let phone = req.body.phone;
        let password = req.body.password;

        User.findOne({ phone: phone })
                .then(admin => {
                        
                        if (admin) {
                              
                                                let token = jwt.sign( {phone: phone }, 'salimakey', (err, token) => {
                                                        res.json({ token: token})
                                                })

                        } else {
                                res.json({ message: 'admin not found'})
                        }


                }).catch((err) => res.status(400).json("Error :" + err));
})

module.exports = router;