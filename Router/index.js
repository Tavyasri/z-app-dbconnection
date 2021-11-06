const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/locations');
const mealTypeController = require('../Controllers/mealTypes');
const restaurantController = require('../Controllers/restaurant');
const menuItemsController = require('../Controllers/items');
const userController = require('../Controllers/users');
const paymentGatewayController = require('../Controllers/PaymentGateway');


route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealTypeController.getMealTypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantByLocation);
route.post('/filter', restaurantController.restaurantFilter);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
route.post('/signup', userController.SignUp);
route.post('/login', userController.Login);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);




module.exports = route;