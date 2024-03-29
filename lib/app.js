const express = require('express');
const app = express();

app.use(express.json());
//mezcal DB
app.use('/api/v1/mezcal', require('./controllers/mezcal'))
//gin DB
app.use('/api/v1/gin', require('./controllers/gin'))
//nonsense DB
app.use('/api/v1/nonsense', require('./controllers/nonsense'))
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
