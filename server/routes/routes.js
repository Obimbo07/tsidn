const express = require('express');
const multer = require('multer');
const router = express.Router();


const storage = multer.memoryStorage();

const upload = multer({storage: storage});

const controller = require('../controller/controller');

router.post('/postContent', upload.single('image') ,async(req, res) => {
    try {
        const newFormData = req.body;
        // console.log(newFormData);
        const imageData = req.file;
        const image = imageData.buffer;
        const imageText = imageData.originalname;
        const selectCategory = newFormData.selectedCategory;
        const selectedTag = newFormData.selectedTag;
        const title = newFormData.title;
        const content = newFormData.content;
        const date = newFormData.date ;
        const startDate = newFormData.startDate ;
        const endDate = newFormData.endDate ;
        // console.log(selectCategory, selectedTag, title, content, image, imageText, date, startDate, endDate);
        // console.log(imageText);
        await controller.insertContent(selectCategory, selectedTag, title, content, image,imageText, date, startDate, endDate);
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

router.put('/updateContent/:id',upload.single('post_image'), async(req, res) => {
    try {
        const newFormData = req.body;
        const id = req.params.id;

        const imageFile = req.file;
        
       
        const file = imageFile.buffer;
        const imageName = imageFile.fieldname;
        
        console.log(newFormData);
        // console.log(id);
        // console.log(file, imageName);
        const category = newFormData.post_category;
        const tag = newFormData.post_tag;
        const title = newFormData.post_title;
        const content = newFormData.post_content;
        const date = newFormData.date;
        const startDate = newFormData.start_date;
        const endDate = newFormData.end_date;
       
        const data = await controller.updateContent(category, tag, title, content, file,imageName, date, startDate,endDate, id )

        res.json({success: true, data:data})
    }catch(error) {
        res.json({success: false, error: error.message});
    }
   
});

router.post('/registerUser', async(req, res) => {
    try {
        const formBody = req.body;

        const userName = formBody.userName;
        const email = formBody.email;
        const password = formBody.password;
        const users = await controller.userList();
        const userExist = users.find(user => user.user_email === email);
        const userExists = Array(userExist).length;

        if(userExists > 0) {
            console.log('Email already Exists');
            res.json({success: false, message: 'Email already Exists'});
        }

        await controller.registerUser(userName, email, password);

        res.json({success: true, message: "Successifully registered"});
    } catch (error) {
        res.json({success: false})
    }
});

router.post('/loginUser', async(req, res) => {
    try {
        const formData = req.body;
        const email = formData.email;
        const password = formData.password;
        const users = await controller.userList();
        const userExist = users.find(user => user.user_email === email);
        
        if(userExist) {
            if(password === userExist.password) {
                res.json({success: true, message: 'Logged in Successifully'});
            }
        } else {
            console.log('Email does not exist');
            res.json({success: false, message: 'Email does not exist'});
        }
    } catch(error) {
        res.json({success: false, message: error.message});
    }
});

router.post('/payPremium', (req, res) => {
    const  formData = req.body;
    const reason = formData.payReason;
    const amount = formData.amount;

    console.log(reason, amount)
})



module.exports = router;