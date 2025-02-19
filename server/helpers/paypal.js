const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "",
//   client_id: "",
//   client_secret: "",
// });
paypal.configure({
  mode: "sandbox", // or "live"
  client_id: "dummy_client_id",
  client_secret: "dummy_client_secret"
});


module.exports = paypal;
