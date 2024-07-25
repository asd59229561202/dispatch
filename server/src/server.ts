import 'dotenv/config';
import express from "express";
import cors from "cors";
import  {dbConnect} from './configs/database'; 

import productRouter from './routers/product.router'
import deliverInfoRouter from './routers/deliverInfo.router';
import userRouter from './routers/user.router';
import deliverRouter from './routers/deliver.router';
dbConnect();

const app = express();
const port = 3000;

// Cors configuration - Allows requests from localhost:4200
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE",
};


// Use cors middleware
app.use(cors(corsOptions));

// Use express.json() middleware to parse JSON bodies of requests
app.use(express.json());


app.use("/product",productRouter);
app.use("/deliverInfo",deliverInfoRouter);
app.use("/user", userRouter);
app.use('/deliver' , deliverRouter);
// GET route - Get all items

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});