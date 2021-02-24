let Groupe = require("../models/groupeModel");
var uniqid = require('uniqid');


exports.index = function (req, res) {
   Groupe.get(function (err, Groupe) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(Groupe);
    });
};

exports.new = function (req, res) {
  var code = uniqid('hello-');
  var groupe = new Groupe();
  groupe.groupe_code = code;
  groupe.id_participant=req.body.id_participant
    groupe.save(function (err) 
    {
      if (err)
            res.json(err);
      else
        res.json({
           message: 'groupe successfully added',
           data: groupe
                });
    });
};

exports.joinGroupe = function (req, res) {

  var groupe = new Groupe();
  let groupe_code  = req.params.groupe_code ;
  let id_new_participant = req.body.id_new_participant;

    groupe.save(function (err) 
    {
     try {
        const updategroup =  Groupe.updateOne(
             { groupe_code : groupe_code  },
            { $push: { id_participant: [id_new_participant] } });
        res.json(updategroup);
    } catch (err) {
        res.json({message:err});
    }
    });  
}

exports.update =  async function(req,res,err){

    let groupe_code = req.params.groupe_code;
    let id_participant = req.body.id_participant;
   
    Groupe.findOne({groupe_code : groupe_code})
    .then((group)=>{
        if(group.id_participant.length === 4) {
                return res.send({
                    message: "group has 4 player all"
                });
        }
    else{
 Groupe.updateOne({ groupe_code: req.params.groupe_code},{ $push: {id_participant:req.body.id_participant} })
    .then(() =>{
       res.json({
           message: 'groupe successfully updated',
           data: Groupe
                });
    })
    .catch((err)=>{
      res.send(err);
    })
    }
   
    })

    }