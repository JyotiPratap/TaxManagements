const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');
const authenticate = require('../middleware/authentication');
const taxController = require('../Controller/TaxController')


router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/user/:userId/profile',authenticate.authentication ,userController.getUser);

router.post('/users/taxCalculator',taxController.userTaxCreation)
router.get('/users/:userId/getTaxDetails', taxController.getTaxDetailsByUserId)
router.post('/users/:userId/markTaxPaid',taxController.markTaxPaid)
router.post('/users/:userId/createAndEditTaxDue',taxController.createAndEditTaxDue)
router.get('users/:userId/getTaxDetailsFiltres',taxController.getTaxDetailsFiltres)


module.exports = router;