const PaymentSchema = require('../models/paymentSchema')
const { validationResult } = require('express-validator');

const PaymentController = async (req, res) => {

    const { studentName, email, number, program } = req.body;

    if (!studentName || !email || !number || !program) {
        res.status(422).json({
            status: 'error',
            message: 'All fields are required!',
        });
        // console.log("All Fields Of Contact Of Is Not Present");
        return;
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
            message: errors
                .array()
                .map((err) => err.msg)
                .toString(),
        });
    }

    try {
        const NewMessage = await new PaymentSchema({
            studentName,
            email,
            number,
            program,
        });
        await NewMessage.save();
        res.status(201).json({ status: 'success', message: 'Data Added Successfully!' });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            data: 'Error While calling Payment Form Api' + error,
        });
    }
}

module.exports = { PaymentController }