const AsyncHandler =  (handlingFunc)=> (req,res,next)=> Promise.resolve(handlingFunc(req, res, next)).catch(next) ;


export default AsyncHandler;