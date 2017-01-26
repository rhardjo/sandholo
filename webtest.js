// initialize everything, web server, socket.io, filesystem, johnny-five
// var app = require('http').createServer(handler);
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');
var five = require("johnny-five"),
    board, fan;
var newSpeed, parseSpeed;
var debounce = 0;

board = new five.Board();

// on board ready
board.on("ready", function() {

    this.pinMode(3, five.Pin.PWM);
    this.pinMode(5, five.Pin.PWM);
    this.pinMode(9, five.Pin.PWM);
    this.pinMode(11, five.Pin.PWM);

});

// make web server listen on port 80
// app.listen(8888);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + ' /index.html');
});

server.listen(8888);

// on a socket connection
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

    socket.on('windSpeed', function (data){
        // console.log(data);
        if (board.isReady){
            realSpeed = data.speed;
            scaledSpeed = data.scaled;
            direction = data.direction;

            if (direction > 180 && direction <= 225) {
                console.log("Gebied 1");
                board.analogWrite(3, scaledSpeed);
                board.analogWrite(5, scaledSpeed/2);
                board.analogWrite(9, 0);
                board.analogWrite(11, 0);
            } else if ( direction > 225 && direction <= 270) {
                console.log("Gebied 2");
                board.analogWrite(3, scaledSpeed/2);
                board.analogWrite(5, scaledSpeed);
                board.analogWrite(9, 0);
                board.analogWrite(11, 0);
            } else if ( direction > 270 && direction <= 315 ) {
                console.log("Gebied 3");
                board.analogWrite(3, 0);
                board.analogWrite(5, 0);
                board.analogWrite(9, scaledSpeed);
                board.analogWrite(11, scaledSpeed/2);
            } else if ( direction > 315 && direction < 360 ) {
                console.log("Gebied 4");
                board.analogWrite(3, 0);
                board.analogWrite(5, 0);
                board.analogWrite(9, scaledSpeed/2);
                board.analogWrite(11, scaledSpeed);
            }

            // board.analogWrite(3, scaledSpeed);
            // board.analogWrite(5, scaledSpeed);
            // board.analogWrite(9, scaledSpeed);
            // board.analogWrite(11, scaledSpeed);
            // console.log("Real speed = " + realSpeed);
            // console.log("Scaled speed = " + scaledSpeed);
        }
    });

    socket.on('disconnect', function () {
        io.emit('user disconnected');
        board.analogWrite(3, 0);
        board.analogWrite(5, 0);
        board.analogWrite(9, 0);
        board.analogWrite(11, 0);
    });
});

function setSpeed(real, scaled) {

    // five.Pin.write(3, scaled);
    board.analogWrite(3, scaled);
    // console.log("Real speed = " + real);
    // console.log("Scaled speed = " + scaled);

    // switch(real) {
    //     case 110:
    //         console.log("Real speed = " + real);
    //         console.log("Scaled speed = " + scaled);
    //         // this.analogWrite(3, )
    //         break;
    //     case 120:
    //         console.log("Real speed = " + real);
    //         console.log("Scaled speed = " + scaled);
    //         break;
    //     case 130:
    //         console.log("Real speed = " + real);
    //         console.log("Scaled speed = " + scaled);
    //         break;
    //     case 140:
    //         console.log("Real speed = " + real);
    //         console.log("Scaled speed = " + scaled);
    //         break;
    //     case 150:
    //         console.log("Real speed = " + real);
    //         console.log("Scaled speed = " + scaled);
    //         break;
    //     case 160:
    //         console.log("Real speed = " + real);
    //         console.log("Scaled speed = " + scaled);
    //         break;
    // }
}
