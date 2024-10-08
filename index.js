import app from "./app.js";
import connectDB from "./config/db.config.js";
const PORT  = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello from Vite.js Server!");
});

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


