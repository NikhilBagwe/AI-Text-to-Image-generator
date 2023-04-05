import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

// allows us to pull environment variables from dotenv file
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async(req, res) => {
    res.send('Hello from DALL-E')
})

//const url = 'https://8080-nikhilbagwe-mernstack-v9pk1ukwwu3.ws-us90.gitpod.io'
const startServer =async() => {
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server has started'))
    }
    catch(error){
        console.log(error);
    }
}

startServer()

