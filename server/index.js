import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import ConnectDB from './Utils/db.js';
import userRoute from './Routes/userRoute.js'
import companyRoute from './Routes/companyRoute.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOption))

// app.get('/', (req, res)=>{
//     return res.status(200).json({
//         success:true,
//         message:"App Running from backend server"
//     })
// })


app.use('/api/user', userRoute);
app.use('/api/company', companyRoute);


const PORT = process.env.PORT || 5001
app.listen(PORT , ()=>{
    ConnectDB();
    console.log(`Server is Running on Port: ${PORT}`)
});