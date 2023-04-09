import express from "express"
// importing the client here is necessary to establish the connection to the db
import client from './db/client.js';
import blogRoutes from "./routes/blogRoutes.js";

const app = express()
const port = process.env.Port || 3001

app.use(express.json());

app.use("/blog", blogRoutes);

// send message on home route, for connection test only
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})