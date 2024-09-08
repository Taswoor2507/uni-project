import mongoose from "mongoose";

const connectDB =  async function(){
    try {
        const ConnectionInstance =await  mongoose.connect(`${process.env.MONGODB_URL}/trees`)
        // console.log("db connect on " ,  ConnectionInstance.connection.host)
    } catch (error) {
        
    }
}

export default connectDB;