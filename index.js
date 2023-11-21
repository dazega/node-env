const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const config = require('./config/config.json');
const controllers = require('./src/controllers');

const app = express();
const port = process.env.PORT || config.port;

app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);
app.use(controllers);

app.get('/', (req, res) => {
    return res.send('Hello world').status(200);
});

app.listen(port, async () => {
    console.log(`App listening port: ${port}`);
    await connectDB();
    console.log('Sync db wait a moment...');
    await sequelize.sync({ alter: true }).then(() => {
        console.log('✅Synced database successfully...');
    });
});
