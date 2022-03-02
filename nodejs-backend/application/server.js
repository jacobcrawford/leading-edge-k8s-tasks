
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const data = [{datapoint: "You"},{datapoint: "rock"}, {datapoint: "Mindster!"}]

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.json(data);
});

app.post('/', (req, res) => {
    data.push([req.body])
    res.end("success")
});

app.listen(8000, () => {
   console.log('server is listening on port 8000');
});
