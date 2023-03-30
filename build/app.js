

const express = require('express');
const authenticate = require('./data-access/authenticate.js');
const sequelize = require('./data-access/database.js');
const userService = require('./routers/user.routes.js');
require('./models/model.js');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/', userService);
app.get('/', (req, res) => {
    res.send('Hello World');
});
sequelize.sync().then(() => {
    console.log('Synced db.');
}).catch((err) => {
    console.log('Failed to sync db : ', err.message);
});
app.listen(PORT, () => {
    authenticate().then(() => {
        return console.log(`Listening on http://localhost:${  PORT}`);
    }).catch((err) => {
        return console.log(err);
    });
});
