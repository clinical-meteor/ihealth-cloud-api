const axios = require("axios");

const getWeight = (timestart, timeend) => () =>
  axios.get(
    `https://cloud.ihealthlabs.com/Data/weight_graph_line_ajax.ashx?timestart=${timestart}&timeend=${timeend}&pageNmuber=1`
  );

const getFat = (timestart, timeend) => () =>
  axios.get(
    `https://cloud.ihealthlabs.com/Data/weight_graph_ajax_fat.ashx?timestart=${timestart}&timeend=${timeend}&pageNmuber=1`
  );

module.exports = { getWeight, getFat };
