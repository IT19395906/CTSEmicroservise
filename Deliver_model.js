const mongoose = require('mongoose');

const DeliverSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
        trim: true
    },
    cid: {
        type: String,
        required: true,
        trim: true
    },
    orderid: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    paymenttype: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
});

const Delivery = mongoose.model('deliveries', DeliverSchema)

module.exports = Delivery;