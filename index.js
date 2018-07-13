const getLogin = require("./src/login");
const { getWeight, getFat } = require("./src/api");
const parser = require("./src/parser");

module.exports = {
  getLogin,
  getWeight,
  getFat,
  parser
};
