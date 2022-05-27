const { Information, User } = require('../model/model');

const InformationController = {
    addInfor: async (req, res) => {
        try {
            const newinfor = new Information(req.body);
            const result = await newinfor.save();
            if (req.body.user) {
                const usr=await User.findOne({_id:req.body.user})
                await usr.updateOne({information:result["_id"]})
                await usr.save();
            }
            res.json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getInforAll:async(req,res)=>{
        try{
            const informations=await Information.find();
            res.status(200).json(informations);
        }catch(err){
            res.status(500).json(err)
        }
    },
    getInforOne:async(req,res)=>{
        try{
            const information=await Information.findById(req.params.id)
            information? res.status(200).json(information):res.status(404).json({message:"Not Found"});
        }catch(err){
            res.status(500).json(err);
        }
    },
    updateInfor:async(req,res)=>{
        try{
            const result=await Information.findByIdAndUpdate(req.params.id,{
                fullname:req.body.fullname,
                birthday:req.body.birthday,
                age:req.body.age,
                skill:req.body.skill,
                position:req.body.position,
                user:req.body.user,
            });
            res.status(200).json(result);
        }catch(err){
            res.status(500).json(err)
        }
    },
    deleteInfor:async(req,res)=>{
        try{
            const result =await Information.findByIdAndDelete(req.body.id)
            res.json(result);
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = InformationController;