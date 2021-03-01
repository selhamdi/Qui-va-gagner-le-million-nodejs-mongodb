const auth = require('../middlewares/adminToken')

// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API participant Its Working',
    });
});
// Import contact controller
var questionController = require('../controllers/questionController');
// // Dossier routes
router.route('/add')
    .post(auth,questionController.new)
    .get(auth,questionController.index);
    
var questionTokenController = require('../controllers/qTokenController');
// // Dossier routes
router.route('/TokenQ')
    .post(questionTokenController.addQuestionToken);
// Export API routes
module.exports = router;