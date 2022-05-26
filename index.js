const express=require('express')
const cors =require('cors')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


const UserRouter=require('./router/user')
const InformationRouter=require('./router/information')

const PORT=8080;
const app=express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL,(e)=>{
    console.log("Database connect success!",e);
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan('common'));

// Router
app.use('/api/user/',UserRouter);
app.use('/api/infor/',InformationRouter);

app.listen(PORT,()=>{
    console.log("Server is running ",PORT);
})
