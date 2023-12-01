const createConnection = require('../database/db');
const queries = require('../queries/queries');



const controllers = {
    insertContent: async(selectCategory, selectedTag, title, content, image, imageText, date, startDate, endDate) => {
        try {
            const connection = await createConnection();
            const query =  queries.insertQuery;
            const insertContent = await new Promise((resolve, reject) => {
                connection.query(query,[selectCategory, selectedTag, title, content, image,imageText, date, startDate, endDate],(err, result) => {
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
    },
    selectContent: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectDataQuery;

            const selectData = await new Promise((resolve, reject) => {
                connection.query(query, (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
            });
            return selectData;
        } catch(error) {
            console.error(error);
        }
    },
    selectTrainings: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectTrainings;

            const selectTraining = await new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                    }
                });
            });

            return selectTraining;

        } catch (error) {
           console.log(error); 
        }
    },
    selectTransportSafety: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectTransportSafety;

            const select = await new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                    }
                });
            });

            return select;
            
        } catch (error) {
           console.log(error); 
        }
    },
    selectPressRelease: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectPressRelease;

            const select = await new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                    }
                });
            });

            return select;
            
        } catch (error) {
           console.log(error); 
        }
    },
    selectPodcasts: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectPodCast;

            const select = await new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                    }
                });
            });

            return select;
            
        } catch (error) {
           console.log(error); 
        }
    },
    selectMeetings: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectMeeting;

            const select = await new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                    }
                });
            });

            return select;
            
        } catch (error) {
           console.log(error); 
        }
    },
    selectNews: async() => {
        try {
            const connection = await createConnection();
            const query = queries.selectNews;

            const select = await new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                    }
                });
            });

            return select;
            
        } catch (error) {
           console.log(error); 
        }
    },
    deleteContent: async(id) => {
        try  {
            const connection = await createConnection();
            const query = queries.deleteContent;

            const Delete = await new Promise((resolve, reject) => {
                connection.query(query,[id], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
            });
            return Delete;
        } catch (error) {
            console.log(error);
        }
    },
    updateContent: async(category, tag, title, content, file,imageName, date, id ) => {
        try{
            const connection = await createConnection();
            const query = queries.updateContent;

            const Update = await new Promise((resolve, reject) => {
                connection.query(query,[category, tag, title, content, file,imageName, date, id ], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
            });
            return Update;
        }catch(error) {
            console.log(error);
        }
    }
}

module.exports = controllers;