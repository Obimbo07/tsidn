const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({path: './database/.env'});

//production cors
const corsOptions = {
    origin: 'https://tsidn.org',
    methods: ['POST', 'GET','PUT','DELETE']
}

//local development cors

const corsOptionsLocal = {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET','PUT','DELETE']
}

app.use(cors(corsOptionsLocal));



app.use(express.json());

const port = process.env.PORT;


const router = require('./routes/routes')

app.use('/api', router);

const createConnection = require('./database/db');

const startServer = () => {

    createConnection.createConnection();
    app.listen(port, () => {
        console.log(`server listening to port ${port}`)
    });
   
  
}

startServer();

