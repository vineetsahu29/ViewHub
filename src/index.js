import connectDB from './db/index.js'

import {app} from './app.js'

import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.on('error',(err)=>{
        console.log("ERROR: ", err);
        throw err
    })
    app.listen(process.env.PORT,()=>(console.log(`server is running at port ${process.env.PORT}`)))
})
.catch((err)=> (console.log(`mongoDb connection failed !!! ${err}`)))