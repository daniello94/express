require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const user = require('./app/controllers/user.controller');
const dataRouter = require('./app/routes/dataRouter')

app.use(express.static('public'));
app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
    res.render('home', {
        title: 'Zadanie',
        content: 'Zadanie z exspresa'
    });
});

app.use('/users', dataRouter);

// app.get('/users', function(req, res){

//    user.list(function(err,users){
//        if(err) res.send(err)
//        res.render('user',{users})
//        console.log(res.render('user',{users}));
//    })
// });



app.listen(process.env.PORT, function () {
    console.log(`Serwer na porcie ${process.env.PORT} działa poprawnie :)`);
});