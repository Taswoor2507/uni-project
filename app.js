import dotenv from 'dotenv'
import express from "express"
const app = express()
dotenv.config();

//add buildin middlewares 
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))


//tree routes
import router from './routes/tree.routes.js';
app.use('/api/v1', router);
export default app