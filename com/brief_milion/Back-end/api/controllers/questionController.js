Question = require("../models/questionModel");
const auth = require('../middlewares/adminToken')

//get
exports.index = function (req, res) {
  Question.get(function (err, Question) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(Question);
    });
};

//post question

exports.new = function (req, res) {
  var question = new Question();

  question.question = req.body.question;
  question.falseAnswer = req.body.falseAnswer;
  question.trueAnswer = req.body.trueAnswer;
  question.point=req.body.point;
    
    question.save(function (err) 
    {
      if (err)
            res.json(err);
      else
        res.json({
           message: 'Question successfully added',
           data: question
                });
    });
};


//rondom question

exports.random = function (req, res){
const getRandomQuestion = (req , res)=>{
  Question.find()
  .then(question => {
    let randomQuestion = question[Math.floor(Math.random() * question.length)];
      res.send(randomQuestion);
  }).catch(err => {
      res.status(500).send({
          message: err.message 
      });
  });


}
}