const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const deliveryroute = require('./Deliver_routes');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8081;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    //followings are now deprecated
    // useCreateIndex: true,
    // useNewUrlParser:true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
},(err) => {
    if (err) {
        console.log('DB error: ', err.message);
    }
});

mongoose.connection.once('open',()=>{
    console.log('DB Synced');
});

app.route('/').get((req, res) => {
    res.send('ABC online shopping platform');
});
app.use('/delivery', deliveryroute());

app.listen(PORT,()=>{
    console.log(`server is up on PORT ${PORT}`);
});
