const express = require("express");
const dotenv = require("dotenv");
const cookieParser=require('cookie-parser');
const connectDB = require("./config/db");

//Route files
const guides = require("./routes/guides");
const auth = require("./routes/auth");
const games = require("./routes/game")

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app=express();

//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//Mount router      
app.use('/api/rkguide/guides', guides);
app.use('/api/rkguide/games', games);
app.use('/api/rkguide/auth', auth);

const PORT = process.env.PORT||5000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

//Handle unhandled promise rejections
process.on(`unhandledRejection`,(err,promise)=>{
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(()=>process.exit(1));
});
