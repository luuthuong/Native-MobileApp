const UserController = require('../controllers/usercontroller');

const router=require('express').Router();

router.post('/',UserController.postUser);
router.get('/',UserController.getAllUser);

module.exports=router;
