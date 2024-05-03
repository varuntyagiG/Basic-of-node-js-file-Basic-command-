const mongoose = require('mongoose');

main().then((res) =>{
    console.log("Connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');      // connect to mongodb-server

}

const booksSchema = new mongoose.Schema({
    tittle:{
        type : String,
        required : true,       // condition h jo hamko mann-ne hi pade ghe
        maxLength : 20
    },
    author:{                         // another way to define schema
        type : String,
    },
    price:{
        type : Number,
        min : [1,"Price is low for amazon"]
    },
    discount : {
        type : Number,
        default : 0      // each book k liye default discout 0 h.
    },
    category : {
        type : String,
        enum : ['fiction','non-fiction']
    }
})

const Book =  mongoose.model('Book',booksSchema);

const book2 = new Book({
    tittle : 'batmen',     // if we dont write tittle . jo ki booksSchema ki under daal rakha h to validations fail aaye gha. Books store nahi hoghe . Database k under.
    price : -1000,
    category : 'fiction'
})

book2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})


// Book.findByIdAndUpdate('6634bef93426180600186c23',{price : -500},{runValidators : true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
 