const express = require('express');
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage();

const upload = multer({storage: storage});


router.post('/postContent', upload.single('image') ,(req, res) => {
    const newFormData = req.body;
    const image = req.file;
    
    console.log(image);
    console.log(newFormData);
});

module.exports = router;