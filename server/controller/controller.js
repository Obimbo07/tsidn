const createConnection = require('../database/db');
const queries = require('../queries/queries');



const controllers = {
    insertContent: async(selectCategory, selectedTag, title, content, image, imageText, date) => {
        try {
            const connection = await createConnection();
            const query =  queries.insertQuery;
            const insertContent = await new Promise((resolve, reject) => {
                connection.query(query,[selectCategory, selectedTag, title, content, image,imageText, date],(err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
            });
            return insertContent;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = controllers;