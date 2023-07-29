import app from "./app.js"
import mongoose from "mongoose"

const port = 3001

const hostname = "127.0.0.1"
// (async ()=>{
//     try {
//         await mongoose.connect(`mongodb://localhost:27017/akshay`)
//         console.log("db connected successfully");
//         app.on("error" ,(err)=>{
//               console.log("Error ",err);
//               throw err
//         })

//         app.listen(port,()=>{
//             console.log(`listening on port ${hostname}:${port}`);
//         })

//     } catch (error) {
//          console.log("there is a error",error);
//     }
// })();



app.listen(port,()=>{
    console.log(`server is running succesfully at ${port}`);
})





