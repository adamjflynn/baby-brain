const express = require('express');
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));





app.listen(PORT, () => {
    console.log('app is listening on port')
})