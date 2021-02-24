let mongoose =require('mongoose');
    //conexion mongosse
    mongoose.connect('mongodb://localhost/api-milion', 
                     { useNewUrlParser: true , useUnifiedTopology: true });
    var db = mongoose.connection;
    
    if(!db)
      console.log("Error connecting db")
    else
        console.log("Db connected successfully")

module.exports