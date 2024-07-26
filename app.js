const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// Server static files from the Public directory

app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));

app.get('/', (req, res) =>{
    res.render('index', {title:'Home'})
})

app.listen(port, ()=>{
    console.log(`App is running on http://localhost:${port}`);
})


