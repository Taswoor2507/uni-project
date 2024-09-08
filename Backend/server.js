import app from "./app.js";
import connectDB from "./config/db.config.js";
const PORT  = process.env.PORT || 3000

connectDB()
.then(()=>{
    console.log("Database connection established")
    const server = app.listen(PORT , function(){
    console.log('Server is running on port ' ,  PORT);

      // Unhandled Promise Rejection
      process.on("unhandledRejection", (err) => {
        console.log(`Error: ${err.message}`);
        console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
        // Shut down the server gracefully
        server.close(() => {
          process.exit(1);
        });
      });


    })


})
.catch((err)=>{
    console.log("Error connecting to database : ", err)
})
// import express from "express";
// const app = express();


// app.get("/api/v1/tree/all", (req, res) => {
//   res.send("Hello from Vite.js Server!");
// });
// app.listen(3030, function(){
//   console.log("done")
// })