var Sdk = require('../../');

var ingresse = new Sdk({
    ticket: {
        url: 'http://hml.ticket.ingresse.com'
    }
});

ingresse.ticket.auth.setToken('123455');

// Get tickt item with ID: 570
ingresse.ticket.getItem('570')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

