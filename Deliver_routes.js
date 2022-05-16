const express = require('express');
const router = express.Router();
const controller = require('./Deliver_controller');

module.exports = function () {
    router.post('/create', controller.createDelivery);
    router.get('/', controller.getAllDeliveries);
    return router;
}