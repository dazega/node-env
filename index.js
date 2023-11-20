const express = require('express');
const app = express();
const config = require(__dirname + '/config/config.json');
const port = process.env.PORT || config.port;

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.listen(port, () => console.log(`App listening port: ${port}`));
