const express = require('express');
const mustacheExpress = require('mustache-express');
require('dotenv').config();


const app = express();

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache')



app.use(express.static('public'));
app.get('/list', (req, res) => {
    res.render('list');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on Port ${process.env.PORT}`)
})

app.listen(5005, () => {
    console.log('Listening on port 5005.')
});
