// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API participant Its Working',
    });
});
// Import contact controller
var groupeController = require('../controllers/groupeController');
// // Dossier routes
router.route('/add')
    .post(groupeController.new)
    .get(groupeController.index);

router.route('/joinGroupe/:groupe_code')
    //.post(groupeController.joinGroupe)
.post(groupeController.update);

// Export API routes
module.exports = router;