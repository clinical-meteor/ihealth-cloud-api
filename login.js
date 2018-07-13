const axios = require("axios");
const axiosCookieJarSupport = require("@3846masa/axios-cookiejar-support")
  .default;
const tough = require("tough-cookie");
const querystring = require("querystring");

axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();
axios.defaults.jar = cookieJar;
axios.defaults.withCredentials = true;

const getLoginPage = () =>
  axios
    .get("https://cloud.ihealthlabs.com/UserAuthWeb/login.aspx")
    .then(response => {
      const viewstateMatch = response.data.match(
        /id="__VIEWSTATE" value="(\/\w+)"/
      );
      const eventvalidationMatch = response.data.match(
        /id="__EVENTVALIDATION" value="(\/[\w\/+=]+)"/
      );

      return {
        __VIEWSTATE: viewstateMatch[1],
        __EVENTVALIDATION: eventvalidationMatch[1]
      };
    });

const postLoginPage = (data, email, password) =>
  axios
    .post(
      "https://cloud.ihealthlabs.com/UserAuthWeb/login.aspx",
      querystring.stringify({
        ...data,
        txtloginemail: email,
        txtloginpassword: password,
        lognButton: "Login"
      })
    )
    .then(response2 => {
      const urlLoginserver = response2.config.url;
      return urlLoginserver;
    });

const getLoginServerPage = (urlLoginserver, escapedEmail) =>
  axios.get(urlLoginserver).then(function(response3) {
    const accesstoken3 = response3.data.match(
      /cloud\.ihealthlabs\.com\/singlesignlogin\.sso\?\w+=\w+%40\w+\.\w+&experttime=&accesstoken=(\w+)/
    )[1];
    const urlSinglesignlogin = `https://cloud.ihealthlabs.com/singlesignlogin.sso?username=${escapedEmail}&experttime=&accesstoken=${accesstoken3}`;
    return urlSinglesignlogin;
  });

const getSingleSignLoginPage = urlSinglesignlogin =>
  axios.get(urlSinglesignlogin);

const getLogin = (email, password) =>
  getLoginPage().then(data =>
    postLoginPage(data, email, password).then(urlLoginserver =>
      getLoginServerPage(urlLoginserver, escapedEmail(email)).then(
        urlSinglesignlogin => getSingleSignLoginPage(urlSinglesignlogin)
      )
    )
  );

const escapedEmail = email => querystring.escape(email);

module.exports = getLogin;
