# Ingresse JavaScript SDK

![SDK CI](https://github.com/ingresse/js-sdk/workflows/SDK/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/ingresse/ingresse-js-sdk/badge.svg?t=BDk7sD)](https://coveralls.io/github/ingresse/ingresse-js-sdk)


This is the [Ingresse](https://www.ingresse.com) JavaScript SDK for **node** and **Browser**.

Supported API's:

| API          | Authentication |
| ------------ | -------------- |
| Ingresse     | Ingresse Auth  |
| Tickets      | JWT            |
| Events       | JWT            |
| EventsSearch | Public         |


## Install

To use in `node`:

```
$ npm install --save ingresse-sdk
```

To use in the `browser`:

```html
<script src="https://cdn.ingresse.com/sdk/ingresse-sdk.js"></script>
```


## How to use

### In the Browser

#### Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

To use in browser include the script `dist/browser/ingresse-sdk.js` in your `.html`
and create a new instance of the Sdk.

```html
<head>
    <!-- Include Ingresse SDK -->
    <script src="https://cdn.ingresse.com/sdk/ingresse-sdk.js"></script>

    <script>
        // Require Ingresse JS SDK
        var Sdk = require('ingresse-sdk');

        // Create a new SDK instance
        var ingresse = new Sdk();

        // Set the auth token for the ticket api
        ingresse.ticket.auth.setToken('1f2e3ggef4e5.gedgwevrwg.23f2f');

        // Get ticket item with ID: 570
        ingresse.ticket.getItem('570')
            .then(function (response) {
                console.log(response)

            }).catch(function (error) {
                console.log(error)
            });
    </script>
</head>

<body></body>
```


You can also customize some of the Sdk configuration
like the url of the API you want to use.

```html
<head>
    <!-- Include Ingresse SDK -->
    <script src="https://cdn.ingresse.com/sdk/ingresse-sdk.js"></script>

    <script>
        // Require Ingresse JS SDK
        var Sdk = require('ingresse-sdk');

        // Create a new SDK instance passing configuration
        // params for the Ticket API
        var ingresse = new Sdk({
            ticket: {
                env: 'hmla'
            }
        });
    </script>
</head>

<body></body>
```


## In Node

To use in `node` first install with `npm`:

```
$ npm install --save ingresse-sdk
```


Then you can require the module to use:

```js
var Sdk = require('ingresse-sdk');

var ingresse = new Sdk({
    ticket: {
        env: 'hmla'
    }
});

ingresse.ticket.auth.setToken('123455');

// Get ticket item with ID: 570
ingresse.ticket.getItem('570')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```


# Development

To build the `node`|`browser` module run the command:

```
$ npm run build
```

To generete the docs run the command:

```
$ npm run docs
```

# Documentation

Will run `build` and `docs` commands and after will publish the [documentation](https://ingresse.github.io/js-sdk) at the GitHub Page.

```
$ npm run deploy
```
