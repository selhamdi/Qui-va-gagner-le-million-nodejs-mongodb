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
    .post(questionController.new)
    .get(questionController.index);
    


// Export API routes
module.exports = router;