
Participant = require("../models/participant");


exports.index = function (req, res) {
   Participant.get(function (err, Participant) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(Participant);
    });
};

exports.new = function (req, res) {
  var participant = new Participant();

  participant.full_name = req.body.full_name;
  participant.age=req.body.age;
  participant.password=req.body.password;
  participant.phone=req.body.phone;
    
    participant.save(function (err) 
    {
      if (err)
            res.json(err);
      else
        res.json({
           message: 'User successfully added',
           data: participant
                });
    });
};



exports.update =  async function(req,res){
    var participant = new Participant();
    const update = await participant.updateOne({ _id: req.params.id },{ $set: { is_valid: "true" }});
    participant.save(function (err) 
    {
      if (err)
            res.json(err);
      else
        res.json({
           message: 'User successfully update',
           data: participant
                });
    });   
    }

//    router.post('/sendMail', function (req, res) {
//     res.json({
//         message: 'email send',
//     });

    
// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//    auth: {
//       user: 'salimaeii1997@gmail.com',
//       pass: '0649018266sa'
//    }
// });
   

//     // setup email data with unicode symbols
//     var mailOptions = {
//         from: 'salimaeii1997@gmail.com', 
//         to: 'salimaeii1997@gmail.com',         
//         subject: 'test de corona', 
//         text: 'votre test et positif'
//     };
 
//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (err) {
//                   console.log(err)
//                 } else {
//                   console.log(sendMail);
//                 }
//     });
// }); 







