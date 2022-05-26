const { Information, User } = require('../model/model')

const UserController = {
    postUser: async (req, res) => {
        try {
            const newUser=new User({...req.body,create:new Date()});
            const result=await newUser.save();
            res.status(200).json(result);
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    getAllUser:async(req,res)=>{
        try{
            const users=await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    }
};
module.exports = UserController;