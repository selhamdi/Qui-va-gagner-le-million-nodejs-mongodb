const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

const addAdmin = (req, res) => {

  jwt.verify(req.token, 'salimakey', (err, authData) => {

if(err) {  res.sendStatus(403);} 

else    {const AdminPush = new Admin({ 
            name: req.body.name,
            phone: req.body.phone,
            password: hashPassword });
                
    AdminPush
        .save()
        .then((data) => { res.send(data); res.json("Admin successfully added") })
        .catch((err) => res.status(400).json("Error :" + err));
                
  });

})