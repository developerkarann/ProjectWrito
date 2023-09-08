const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true
    },
    program: {
        type: String,
        require: true
    }
})

const PaymentSchema = new mongoose.model('payment_details', paymentSchema);

module.exports = PaymentSchema;