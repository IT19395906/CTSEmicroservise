const Delivery = require('./Deliver_model');

const createDelivery = async (req, res) => {
    if(req.body) {
        const delivery = new Delivery(req.body);
        await delivery.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

const getAllDeliveries = async (req, res) => {
    await Delivery.find({}).populate('cname orderid paymenttype')
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

module.exports = {
    createDelivery,
    getAllDeliveries
};
