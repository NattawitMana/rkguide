const express = require("express");
const dotenv = require("dotenv");

//Route files
const guides = require("./routes/guides");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app=express();

//Mount router      
app.use('/api/rkguide/guides', guides);

const PORT = process.env.PORT||5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

