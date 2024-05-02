const mongoose = require('mongoose');

main().then((res) =>{
    console.log("Connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name : String,
    email: String,                  // collection =  (Blue print)
    age : Number
})

const User = mongoose.model('User',userSchema);          // user in parameter is collection name.
                                                         
// const user2 = new User({
//     name : ' Tyagi',
//     email : 'gtyagi@gmail.com',                   //  1
//     age : 79
// }) 


// user2.save().then((res)=>{
//     console.log(res);
// })                                      
// .catch((err)=>{
//     console.log(err);
// })


// User.insertMany([
//     {name : 'Varun Tyagi',email: 'varungauravtyagi@gmail.com',age:20},
//     {name : 'Luvkush Tyagi',email: 'Luvkushgauravtyagi@gmail.com',age:18},
//     {name : 'Gaurav Tyagi',email: 'gauravtyagi@gmail.com',age:40}
// ]).then((res)=>{
//     console.log(res);
// })


// User.findOne({ _id : '6633e6a6bb8774d458112d9b'}).then((res)=>{
//     console.log(res);
// })                                               // User.find({key:Value})
// .catch((err)=>{
//     console.log(err);
// })


// User.findById({ _id : '6633e6a6bb8774d458112d9b'}).then((res)=>{
//     console.log(res);
// })                                              
// .catch((err)=>{
//     console.log(err);
// })


// User.updateOne({age : 18},{name : 'Chitha'}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.updateMany({age :{$gt : 40}},{age : 20}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.findOneAndUpdate({name : 'Gaurav Tyagi'},{name : "Dinesh Tyagi"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.findOneAndUpdate({name : 'Dinesh Tyagi'},{name : "Tyagi"},{new:true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.deleteOne({age : 18}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.deleteMany({age : {$gte: 30}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


User.findByIdAndDelete({_id : '663405d4fb0d053849137a0b'}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});






