//Import Express Module
let express = require('express');
let router = express.Router();
//Import Controllers
let serviceController = require('../controllers/Service');

//Setting route
router.route("/userlist").get(serviceController.userlist);

exports.router = router;