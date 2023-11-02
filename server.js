const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./backend/routes/user')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoutes);


app.use('/static', express.static('frontend/dist'))


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





