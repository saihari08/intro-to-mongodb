const mongoose=require("mongoose")

let connectToMDB= async()=>{

try{

await mongoose.connect("mongodb+srv://bsaihari08:bsaihari08@cluster0.zdkdgld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

console.log("No error,connected successfully");
}catch(err){
 console.log("Unable to connect")
 console.log(err);
}
}

connectToMDB();