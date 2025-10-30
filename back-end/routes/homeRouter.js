const express = require('express');
const {getAllCar, getCarById} = require('../controllers/homeController');
const { getCarFilter } = require('../controllers/homeController');
const router = express.Router();

router.get('/allcars', getAllCar);
router.post('/carinf/:id', getCarById);
router.get('/cars', getCarFilter);
// router.delete('/cars/:id', deleteCar);  
// router.put('/cars/:id', updateCar);     

module.exports = router;