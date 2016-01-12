var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// // Set static path
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'))
// });

// app.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname, 'about.html'))
// });

// app.get('/services', function (req, res) {
//     res.sendFile(path.join(__dirname, 'services.html'))
// });




// // Using public folder
app.use(express.static(path.join(__dirname, 'public')));


// // create a json link
app.get('/people', function (req, res) {
    var people = [
        {
            first_name: "John",
            last_name: "Doe",
            age: 34,
            gender: "male"
        },
        {
            first_name: "Tom",
            last_name: "Ds",
            age: 32,
            gender: "male"
        },
        {
            first_name: "Jane",
            last_name: "Doe",
            age: 31,
            gender: "female"
        }
    ];
    res.json(people);
})

// create a download link
app.get('/download', function (req, res) {
    res.download(path.join(__dirname, '/downloads/04_Survival_Tips.pdf'))
});

// create redirect
app.get('/about', function (req, res) {
    res.redirect('/about.html');
});

app.post('/subscribe', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    console.log(name+' has subscribed with '+email);
})

app.listen(3000, function () {
    console.log('Server started on port 3000');
});