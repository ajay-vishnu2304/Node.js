import { createConnection } from 'mysql2';

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "Ajay@123",
  database: "ecommerce"
});

db.connect((err:any)=>{
    if(err){
        console.log("DB connection failed:",err.message)
        return
    }
    console.log("DB connected successfully")
})

export default db;