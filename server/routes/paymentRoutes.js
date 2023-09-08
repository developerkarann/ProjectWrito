const express = require('express');
const router = express.Router();
const { PaymentController } = require('../controllers/paymentController');
const { body } = require('express-validator');


router.route('/').post(
    [body('email', "Please enter a valid email! ").isEmail(),
    body('studentName', "Please enter valid name! ").isLength({ min: 2 }),
    body('number', "Please enter a valid number! ").isNumeric(),
    body('number', "Enter minimum 10 digit number! ").isLength({ min: 10 }),
    body('number', "Enter maximum 10 digit number!  ").isLength({ max: 10 })],
    PaymentController)


module.exports = router;