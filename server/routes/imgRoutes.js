const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imgController');
const { jwtAuthMiddleware } = require('../jwt')

// Route to upload an image
router.post('/uploadImg', jwtAuthMiddleware,imageController.uploadImage);



module.exports = router;
