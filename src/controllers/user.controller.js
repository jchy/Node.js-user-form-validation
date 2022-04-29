const User = require('../models/user.model');
const {validationResult} = require("express-validator")

// get all users
const getAllUsers = async(req, res)=>{
        try {
            const users = await User.find({});
            res.status(200).json({data: users});
        } catch (error) {
            res.status(500).json({msg : error.message});
        }
}

// creating new users in user collection of database named: mydb
const createNewUser = async (req, res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({msg : errors.array()});
        }
        const user = await User.create(req.body);
        return res.status(200).json({data : user});
    } 
    catch (error) {
        return res.status(500).json({msg : error.message});
    }
}

module.exports = {createNewUser, getAllUsers};