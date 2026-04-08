import express from 'express';
import type { Request, Response } from 'express';
import db from './db';

const app = express();

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.get("/myName", (req: Request, res: Response) => {
  console.log("myName route called");
  res.json({ message: "On myName route" });
});

app.get("/get-users", (req: Request, res: Response) => {
  db.query("SELECT * FROM users", (err: any, data: any) => {
    if (err) {
      res.status(500).json({ error: "Can't fetch users" });
    } else {
      res.json(data);
    }
  });
});

const PORT =3000;

app.listen(PORT,()=>{
  console.log("Server is running successfully")
})