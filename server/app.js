const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const crypto = require('crypto');

dotenv.config({ path: './database/.env' });

const app = express();

function generateSessionSecret(length = 32) {
    return crypto.randomBytes(length).toString('hex');
}

const sessionSecret = generateSessionSecret();
console.log(sessionSecret);


app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));

// Production CORS
// const corsOptions = {
//     origin: 'https://tsidn.org',
//     methods: ['POST', 'GET', 'PUT', 'DELETE']
// };

// const corsOptionsLocal = {
//     origin: 'http://localhost:3000',
//     methods: ['POST', 'GET', 'PUT', 'DELETE']
// };
app.use(cors());

app.use(express.json());

const port = process.env.PORT;
console.log(port);

const router = require('./routes/routes');

app.use('/api', router);

const createConnection = require('./database/db');

const startServer = () => {
    createConnection.createConnection();
    app.listen(port, () => {
        console.log(`server listening to port ${port}`);
    });
};

startServer();
