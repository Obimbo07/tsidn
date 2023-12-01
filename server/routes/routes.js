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

router.get('/selectContent', async(req, res) => {
    try{
        const data = await controller.selectContent();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.get('/selectTraining', async(req, res) => {
    try {
        const data = await controller.selectTrainings();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.get('/selectTransportSafety', async(req, res) => {
    try {
        const data = await controller.selectTransportSafety();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.get('/selectPressRelease', async(req, res) => {
    try {
        const data = await controller.selectPressRelease();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.get('/selectPodCasts', async(req, res) => {
    try {
        const data = await controller.selectPodcasts();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.get('/selectMeeting', async(req, res) => {
    try {
        const data = await controller.selectMeetings();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.get('/selectNews', async(req, res) => {
    try {
        const data = await controller.selectNews();
        res.json({success: true, data: data});
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

router.delete('/deleteContent/:id', async(req,res) => {
    try {
        const {id} = req.params;
        await controller.deleteContent(id);
        
        res.json({success: true})
    } catch(error) {
        res.json({success: false, error: error.message});
    }
});

router.put('/updateTransport/:id',upload.single('post_image'), (req, res) => {
    const newFormData = req.body;
    const id = req.params.id;
    const imageFile = req.file;
    const file = imageFile.buffer;
    const imageName = imageFile.fieldname;

    console.log(newFormData);
    console.log(id);
    console.log(file, imageName);
})

module.exports = router;