const express = require('express');
const connectDB = require('./db/connection');
const app = express();

connectDB();

app.get('/', (req, res) => {
	res.send('Welcome to Mediguru Telehealth API');
});

app.use(express.json({ extended: false }));
app.use('/api/registerUser', require('./route/user'));

const port = process.env.Port || 3000;
app.listen(port, () => console.log('Server Listening...'));
