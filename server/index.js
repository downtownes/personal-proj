require('dotenv').config();
const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});


app.get('/api/muscle', controller.getWorkout);
app.get('/api/fatburn', controller.getWorkout);
app.get('/api/week', controller.getWeek);




app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port: ${process.env.SERVER_PORT}`))