const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const userRouter = require('./routes/users');
const myroutes = require('./routes/myroutes');
//app.use(express.static(path.join(__dirname, 'public')))

myroutes(app);
app.use(mainRouter);
app.use(userRouter);

app.listen(3000);
