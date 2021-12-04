const express = require('express');
const PORT = 3001;
const app = express();
const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('hbs', exphbs ({
    
}))

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`app is listening on port http://localhost:${PORT}`)
})