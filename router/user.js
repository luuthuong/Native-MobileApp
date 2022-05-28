const UserController = require('../controllers/usercontroller');

const router=require('express').Router();

router.post('/',UserController.postUser);
router.get('/',UserController.getUserAll);
router.post('/usr',UserController.getUserOne);
router.get('/:usr',UserController.checkUserExist)
router.put('/:id',UserController.updateUser);
router.delete('/',UserController.deleteUser);

module.exports=router;
