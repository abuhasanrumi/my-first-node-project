const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('My first API')
})

app.listen(4000, () => console.log('Listening to port 4000'))