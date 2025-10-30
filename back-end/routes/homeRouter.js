const express = require('express');
const {getAllCar, getCarById} = require('../controllers/homeController');
const { getCarFilter } = require('../controllers/homeController');
const router = express.Router();

router.get('/allcars', getAllCar);
router.post('/carinf/:id', getCarById);
router.get('/cars', getCarFilter);

module.exports = router;