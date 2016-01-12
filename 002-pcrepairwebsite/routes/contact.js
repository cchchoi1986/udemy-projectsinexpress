var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res) {
    // res.send('Form Submitted');
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'cchchoi1986@gmail.com',
            pass: 'g00dn1gh7'
        }
    });

    var mailOptions = {
        from: 'bleh <hihi@hi.com>',
        to: 'mehss clementchoi86@hotmail.com',
        subject: 'website submission',
        text: 'you have a submission with folloing details Name: '+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
        html: '<h1>Hello World</h1>\n<p>Name: '+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message+'</p>'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
            res.redirect('/');
        }
        console.log('message sent:'+info.response)
        res.redirect('/');
    })
})

module.exports = router;
