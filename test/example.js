const { getLogin, getWeight, getFat, parser } = require("./index");
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

getLogin(email, password)
  .then(getFat("01/04/2018", "02/04/2018"))
  .then(res => console.log(parser.fat(res.data)))
  .then(getWeight("01/04/2018", "02/04/2018"))
  .then(res => console.log(parser.weight(res.data)))

  .catch(error => console.log(error));
