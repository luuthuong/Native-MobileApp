const router=require('express').Router();
const InformationController = require('../controllers/informationController');

router.post('/',InformationController.addInfor)

module.exports=router;