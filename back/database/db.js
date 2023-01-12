import mongoose from 'mongoose';
  const Connection=()=>{
    const url="mongodb://127.0.0.1:27017/newDatabase"
try{
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database Connected Succesfully');
}
catch(error){
    console.log("error while connecting with the database");
}
}
 
export default Connection;