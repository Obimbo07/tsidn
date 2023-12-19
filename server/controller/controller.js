const database = require('../database/db');
const queries = require('../queries/queries');
<<<<<<< HEAD
=======



>>>>>>> 706545d532f126e2e14f837e5da50c8a22251034

const controllers = {
    insertContent: async(selectCategory, selectedTag, title, content, image, imageText, date, startDate, endDate) => {
        try {
            const connection = await database.createConnection();
            
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
            const connection = await database.createConnection();
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
    updateContent: async(category, tag, title, content, file,imageName, date, startDate,endDate, id ) => {
        try{
            const connection = await database.createConnection();
            const query = queries.updateContent;

            const Update = await new Promise((resolve, reject) => {
                connection.query(query,[category, tag, title, content, file,imageName, date, startDate,endDate, id ], (err, result) => {
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
    },
    userList: async () => {
        try{
            const connection = await database.createConnection();
            const query = queries.usersList;

            const users = await new Promise((resolve, reject) => {
                connection.query(query, (err, result) => {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(result);
                    }
                });
            });
            return users;
        } catch (error) {
            console.log(error);
        }
    },
    registerUser: async (userName, email, password) => {
        try {
            const connection = await database.createConnection();
            const query = queries.registerUser;

            const register = await new Promise((resolve, reject) => {
                connection.query(query, [userName, email, password], (err, result) => {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(result);
                    }
                });
            });
            return register;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = controllers;