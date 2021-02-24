Question = require("../models/questionModel");


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

exports.new = function (req, res) {
  var question = new Question();

  question.question = req.body.question;
  question.falseAnswer = req.body.falseAnswer;
  question.trueAnswer = req.body.trueAnswer;

    
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