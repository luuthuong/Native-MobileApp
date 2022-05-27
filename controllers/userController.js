const { Information, User } = require('../model/model')

const UserController = {
    postUser: async (req, res) => {
        try {
            const newUser=new User({
                username:req.body.username,
                password:req.body.password,
                email:req.body.email,
                information:req.body.information,
                create:new Date(),
            });
            const result=await newUser.save();
            res.json(result);
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    getUserAll:async(req,res)=>{
        try{
            const users=await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getUserOne:async(req,res)=>{
        try{
            const user=await User.findById(req.params.id)
            user? res.status(200).json(user):res.status(404).json({"message":"Not Found"})
        }catch(err){
            res.status(500).json(err)
        }
    },
    updateUser:async(req,res)=>{
        try{
            const user=await User.findById(req.params.id);
            const result =await user.updateOne({
                password:req.body.password,
                email:req.body.email,
                create:new Date()
            });
            user.save();
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    deleteUser:async(req,res)=>{
        try{
        const result=await User.findByIdAndDelete(req.body.id);
        await Information.findByIdAndDelete(result.information)
        res.status(200).json(result);
        }
        catch(err){
            res.status(500).json(err)
        }
    }
};
module.exports = UserController;