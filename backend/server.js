
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.json([{datapoint: "You"},{datapoint: "rock"}, {datapoint: "Mindster!"}]);
});

app.listen(8000, () => {
   console.log('server is listening on port 8000');
});
