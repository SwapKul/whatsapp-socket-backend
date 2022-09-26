import User from "../modal/User.js";

export const addUser = async (req, res) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub });

        if (exist) {
            res.status(200).json({ msg: 'user already exist'});
            return;
        }

        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);

    } catch (err){
        return res.status(500).json(err.message);
    }
}

export const getUsers = async ( req, res ) => {
    try {
        const Users = await User.find({});
        return res.status(200).json(Users);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}