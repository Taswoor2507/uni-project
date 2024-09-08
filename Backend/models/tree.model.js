import mongoose from "mongoose";

const treeSchema= mongoose.Schema({
    treeType:{
        type:String,
        required:true,
    } , 
    treeName:{
        type:String,
        required:true,
    }  ,
    wateringSchedule:{
        type:String,
        required:true,
    } ,
    diseases:[
        {
            type:String,
            required:true,
        }
    ] , 
    age:{
        type:Number,
        required:true,
    } ,
    uses:[
        {
            type:String,
            required:true,
        }
    ] ,
    

} , {timeStamps:true})


const Tree = mongoose.model("tree" , treeSchema)
export default Tree