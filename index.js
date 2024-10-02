const { PrismaClient } = require("@prisma/client");
const express = require("express") 

const app = express();

const prisma = new PrismaClient

app.use(express.json())

app.get("/",async(req,res)=>{
    const getdata = await prisma.techx.findMany()
    res.json({message:"recived", data:getdata})
})

app.post("/" , async(req,res)=>{
    const data = req.body;

    const newdata = await prisma.techx.create({
        data:{
            partid:data.partid,
            dept:data.dept
        }
    })

    res.json({
        message:"dszkfjh",
        data:newdata
    })
})


app.listen(3000)