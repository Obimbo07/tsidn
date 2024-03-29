const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');

const config = {
    host: process.env.HOST,
    database : process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,
    // port: process.env.DB_PORT
}

const createConnection = async () => {
    const connection =   mysql.createConnection(config);;
    try {
        await new Promise((resolve, reject) => {
            connection.connect((err) => {
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
        console.log('connection created');
        return connection;

    } catch (err) {
        console.error(err)
    }
}

// const closeConnection = (connection) => {
//     return new Promise((resolve, reject) => {
//         connection.end((err) => {
//             if(err) {
//                 reject(err);
//             }else {
//                 console.log('Connection Closed');
//                 resolve();
//             }
//         })
//     })
// }

module.exports = {createConnection};