const express = require('express');
require('dotenv').config();
const weatherRoutes = require('./routes/weatherRoutes');




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(weatherRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}....`);
});


