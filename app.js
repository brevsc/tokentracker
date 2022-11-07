var btc = document.getElementById("btc-price");
var eth = document.getElementById("eth-price");
var usdt = document.getElementById("usdt-price");
var bnb = document.getElementById("bnb-price");
var doge = document.getElementById("doge-price");

fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin&vs_currencies=usd"
)
  .then((response) => response.json())
  .then(function (response) {
    btc.textContent = response.bitcoin.usd;
    eth.textContent = response.ethereum.usd;
    usdt.textContent = response.tether.usd;
    bnb.textContent = response.binancecoin.usd;
    doge.textContent = response.dogecoin.usd;
  });
