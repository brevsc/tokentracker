var btc = document.getElementById("btc-price");
var eth = document.getElementById("eth-price");
var usdt = document.getElementById("usdt-price");
var bnb = document.getElementById("bnb-price");
var doge = document.getElementById("doge-price");

function refreshPage() {
  window.location.reload();
}

var liveprice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin&vs_currencies=usd",

  method: "GET",
  headers: {},
};

$.ajax(liveprice).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  usdt.innerHTML = response.tether.usd;
  bnb.innerHTML = response.binancecoin.usd;
  doge.innerHTML = response.dogecoin.usd;
});
