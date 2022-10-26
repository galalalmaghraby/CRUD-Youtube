const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
const User = mongoose.model('User',userSchema)

exports.getUsers = ()=> {
    return User.find()
}
exports.newUser = data => {
    return new Promise((resolve,reject)=>{
        User.findOne({email:data.email}).then(user=>{
            if(user){
                reject("user is already exist")
            }else{
                const newUser = new User(data)
                newUser.save()
                resolve("User Done Added")
            }
        })
    })
}
exports.getUser = id =>{
    return User.findById(id)
}
exports.updateUser = (id,data)=>{
    return User.findByIdAndUpdate(id,data)
}
exports.deleteUser = id => {
    return User.findByIdAndDelete(id)
}