const router=require('express').Router();
const InformationController = require('../controllers/informationController');

router.post('/',InformationController.addInfor);
router.get('/',InformationController.getInforAll);
router.get('/:id',InformationController.getInforOne);
router.put('/:id',InformationController.updateInfor);
router.delete('/',InformationController.deleteInfor);

module.exports=router;