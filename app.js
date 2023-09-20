const btc = document.getElementById("btc-price");
const eth = document.getElementById("eth-price");
const usdt = document.getElementById("usdt-price");
const bnb = document.getElementById("bnb-price");
const doge = document.getElementById("doge-price");
const text_logo = document.getElementById("logo");

// click event on the logo to reload the page
const reloadPage = ()=> window.location.reload();
text_logo.addEventListener("click", reloadPage);

// Fetching the data from the API
fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin&vs_currencies=usd"
)
  .then((response) => response.json())
  .then((response) => {
    btc.textContent = response.bitcoin.usd;
    eth.textContent = response.ethereum.usd;
    usdt.textContent = response.tether.usd;
    bnb.textContent = response.binancecoin.usd;
    doge.textContent = response.dogecoin.usd;
  });
