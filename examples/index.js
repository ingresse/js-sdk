var SDK = require('../index');
var ingresse = new SDK();

var tickets = ingresse.ticket;


console.log(tickets);

tickets.auth.token = '123455';

tickets.getItems()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

