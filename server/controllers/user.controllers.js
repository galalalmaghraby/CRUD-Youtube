const { newUser, getUsers,getUser,updateUser,deleteUser } = require('../model/user.model')

exports.getUsers = (req, res, next) => {
    getUsers().then((users) => {
        res.status(200).json(users)
    }).catch(err => {
        res.status(400).json({msg:"Not User Exist"})
    })
}

exports.newUser = (req, res, next) => {
    newUser(req.body).then((response) => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(400).json(err)
    })
}

exports.getUser = (req,res,next)=>{
    getUser(req.params.id).then(user => {
        res.status(200).json(user)
    }).catch(err=>{
        res.status(400).json("Failed Get User Please Try Again")
    })
}

exports.updateUser = (req,res,next)=>{
    updateUser(req.params.id,req.body).then(()=>{
        res.status(200).json({msg:" Edit Has Done "})
    }).catch(err=>{
        res.status(400).json("Edit Has Failed")
    })
}

exports.deleteUser = (req,res,next) => {
    deleteUser(req.params.id).then(()=>{
        res.status(200).json({msg:" User Has Been Deleted "})
    }).catch(err=>{
        res.status(400).json("Deleted Has Failed")
    })
}