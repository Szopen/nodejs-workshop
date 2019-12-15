const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("middleware");
    next();
});

app.use('/', (req, res, next) => {
    res.send('hello world2222');
})

app.use('/deneme', (req, res, next) => {
    res.send('deneme');
})

app.use('/deneme2', (req, res, next) => {
    res.send('deneme');
})

app.listen(3000);