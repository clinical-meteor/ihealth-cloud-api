# iHealth cloud api

> API parser for iHealth cloud.

This package allows access to iHealth cloud API. Please note that exists a [developer site](http://developer.ihealthlabs.com/) for applications API. In this moment only is supported the Weight API.

## Installation

OS X & Linux:

```sh
npm install ihealth-cloud-api --save
```

## Usage example

```js
const { getLogin, getWeight, getFat, parser } = require("ihealth-cloud-api");
const email = "example@email.com";
const password = "123456";

getLogin(email, password)
  .then(getFat("01/04/2018", "02/04/2018"))
  .then(res => console.log(parser.fat(res.data)))
  .then(getWeight("01/04/2018", "02/04/2018"))
  .then(res => console.log(parser.weight(res.data)))

  .catch(error => console.log(error));
```

## Development setup

Clone the repo and install with NPM.
Please make unit tests when is necessary. To run the tests:

```sh
npm test
```

## Release History

* 0.0.1
  * ADD: Weight API
  * Create the Repository

## Contributing

1. Fork it (https://gitlab.com/joyarzun/ihealth-cloud-api)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
