'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require( 'mongoose' );
const Restaurant = require('./restaurantEntity');
const controller = require('./restaurantsController');



router . post('/add', controller.addRestaurant);
router . get('/', controller.getRestaurant);
router. delete('/delete/:id',controller.deleteRestaurant);
router.put('/update/:id', controller.updateRestaurant);



module.exports = router;
