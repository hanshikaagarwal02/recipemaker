const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const db=mongoose.connection;
db.on('error',console.log.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connected')
})

//models
require('./Category');
require('./Recipe')