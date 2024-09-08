import AsyncHandler from "../utils/asyncHandler.js";

const addTree = AsyncHandler(async (req,res,next)=>{
   res.status(201).json({
     message: "Tree added successfully",
   })
})

export {addTree}