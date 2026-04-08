import { createPool } from 'mysql2';

const db = createPool({
  host: "localhost",
  user: "root",
  password: "Ajay@123",
  database: "ecommerce"
}).promise();

// db.connect((err:any)=>{
//     if(err){
//         console.log("DB connection failed:",err.message)
//         return
//     }
//     console.log("DB connected successfully")
// })

export default db;