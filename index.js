const express = require('express');
const app = express();
const config = require('./config/config.json');
const { connectDB, sequelize } = require('./config/db');
const port = process.env.PORT || config.port;

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.listen(port, async () => {
    console.log(`App listening port: ${port}`);
    await connectDB();
    console.log('Sync db wait a moment...');
    await sequelize.sync({ force: false }).then(() => {
        console.log("✅Synced database successfully...");
    });
});
