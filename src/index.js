const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const wakeUpDyno = require('./wakeUpDyno');

const app = express();

mongoose.connect('mongodb+srv://bookstore:bookstore@teste-usfrr.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;
const DYNO_URL = "https://my-dev-radar.herokuapp.com";
app.listen(port, () => {
    if(process.env.node_env === 'production') {
        wakeUpDyno(DYNO_URL);
    }
});