var express = require('express'),
    socket  = require('socket.io'),
    http    = require("http"),
    db      = require('./db');


//App Setup
var app = express();
var server = app.listen(4000,function(){
    console.log('Listening 4000')
})

// Socket setup
var io = socket(server);

//Static files
app.use(express.static('public'))

//Get paramaters from URL

app.get('/api/motor_details', function(req, res,next) {
    var entries = {
        device_id: req.query.deviceId,
        a: req.query.a,
        b: req.query.b,
        c: req.query.c,
        date: '2018-06-27'
    }
    var query = db.query('insert into entries set ?', entries,function (err, result) {
        if(err){
            console.error(err);
            return;
        }
    })
    //emit using socket io, you can name it whatever you want
    // socket.emit('sendingMessage');

    res.send("Done");
    
});


io.on('connection',function(socket){
    console.log("User Connected",socket.id)
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    db.query('SELECT * FROM entries',function(err,rows){
        if(err) throw err;
        socket.emit('showrows', rows);
    })
})


