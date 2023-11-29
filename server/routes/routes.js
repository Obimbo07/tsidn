const express = require('express');
const multer = require('multer');
const router = express.Router();


const storage = multer.memoryStorage();

const upload = multer({storage: storage});

const controller = require('../controller/controller');

router.post('/postContent', upload.single('image') ,async(req, res) => {
    try {
        const newFormData = req.body;
        const imageData = req.file;
        const image = imageData.buffer;
        const imageText = imageData.originalname;
        const selectCategory = newFormData.selectedCategory;
        const selectedTag = newFormData.selectedTag;
        const title = newFormData.title;
        const content = newFormData.content;
        const date = newFormData.date;
        // console.log(selectCategory, selectedTag, title, content, date);
        // console.log(imageText);
        await controller.insertContent(selectCategory, selectedTag, title, content, image,imageText, date);
        res.json({success:true});
        
    } catch (error) {
        res.json({success: false, error: error.message});
    }   
});

module.exports = router;