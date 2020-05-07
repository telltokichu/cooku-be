const express = require('express');
const connectDB = require('./db/connection');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
	res.send('Welcome to Mediguru Telehealth API');
});

app.use('/api/registerUser', require('./route/user'));

const port = process.env.PORT || 3000;
console.log('port: ', port);
app.listen(port, () => console.log('Server Listening...'));
