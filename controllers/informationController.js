const { Information, User } = require('../model/model');

const InformationController = {
    addInfor: async (req, res) => {
        try {
            const newinfor = new Information(req.body);
            const result = await newinfor.save();
            // if (req.body.user) {
                // const usr = User.findById(req.body.user);
                const usrs = User.find();
                res.status(200).json(usrs);
                await usr.updateOne({ $where: { information: result["_id"] } })
            // }
        } catch (err) {
            res.status(500).json(err);
        }
    }

}
module.exports = InformationController;