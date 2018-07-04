//Make Connection
var socket = io.connect('http://localhost:4000');

//Query DOM

var display = document.getElementById('display');


//Listen for events
socket.on('showrows', function(rows) {
    var html='';
    for (var i=0; i<rows.length; i++) {
        html += rows[i].device_id + ' ' + rows[i].a + '<br>';
    }  
    display.innerHTML = html;
});

// socket.on('sendingMessage', () => {
//     //use whatever library you want for ajax calls, this is just an example
//     fetch('http://localhost:4000/api/get-motor-details')
//     .then((response) => {
//         var html='';
//         for(var i=0; i<response.length; i++){
//             html += response[i].device_id + ' ' + response[i].a + '<br>';
//         }  
//         document.getElementById("display").innerHTML = html;
//     });
// });