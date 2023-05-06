import  express  from "express";
import bodyParser from "body-parser";
import  path  from "path";
import Form from "./models/posts.js";
import connection from "./db/index.js";


const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join("../front" , "dist")))

app.get("/", (req , res) => {
    const indexPath = path.resolve("../front" , "dist" , "index.html")
    res.sendFile(indexPath)
})
app.get("/login", (req , res) => {
    const indexPath = path.resolve("../front" , "dist" , "index.html")
    res.sendFile(indexPath)
})

app.post("/adduser" , async(req ,res ) => {
    const {name , email , password} = req.body
    const form = new Form({name , email , password})
    await form.save()
    res.status(200).json(form)
})

connection 
.then(() => app.listen(3000, ()=> console.log("server has started")))
.catch((err) =>{console.log("error")})