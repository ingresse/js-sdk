var Sdk = require('../../dist/ingresse-sdk');

var ingresse = new Sdk();

ingresse.api.auth.setPublicKey('172f24fd2a903fc0647b61d7112ee1b9814702be');
ingresse.api.auth.setPrivateKey('5883af339b287ec5235e79f48434247fa0c75633');

// Get ticket item with ID: 570
ingresse.api.getEvent('19442', { eita: 'teste' })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

