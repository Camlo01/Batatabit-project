// LLAVE Acceso CoinAPI.io = 12E42E01-F5AA-413C-AFAE-BA3180D99EE3
//------------------------------------------
// Nombres de Criptomonedas
// Bitcoin = BTC
// Ethereum = ETH
// Bnb = BNB
// Tether = USDT
//------------------------------------------
// Explicación Link
// `https://rest.coinapi.io/v1/exchangerate/{cryptoname}/{to exchange}?apikey=${apiKey}`
// Peticion Precio BITCOIN en Dolares
// `https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=${apiKey}`

import {
  tooManyRequestsMessage,
  errorMessage,
  noDataMessage,
  authenticationMessage,
} from "./Messages.js";

/**
 *Function that request the price of the crypto according
 *to the currency and print it into the DOM
 * @param {String} Crypto (BTC ejem.)
 * @param {String} Currency (USD ejem.)
 * @param {String} wherePrintIt (id of div in HTML)
 */
async function cryptoPrice(Crypto, Currency, wherePrintIt) {
  // Get data
  const url = fullUrl(Crypto, Currency);
  const response = await fetch(url);
  const wherePrintPrice = document.getElementById(wherePrintIt);

  // What to do according the status code
  switch (response.status) {
    case 200:
      const data = await response.json();
      const price = `$${Math.trunc(data.rate)}`;
      wherePrintPrice.innerHTML = convertToHtml(price);
      break;
    case 401:
      authenticationMessage();
      break;
    case 429:
      tooManyRequestsMessage();
      wherePrintPrice.innerHTML = convertToHtml(`$!.!!!`);
      break;
    case 500:
      errorMessage();
      wherePrintPrice.innerHTML = convertToHtml(`$X.XXX`);
      break;
    case 550:
      noDataMessage();
      wherePrintPrice.innerHTML = convertToHtml(`$?.???`);
      break;
  }
}

/**
 *Function that return code into HTML code
 * @param {String} text
 * @returns String of HTML code
 */
function convertToHtml(text) {
  let htmlCode = `<div>`;
  for (i = 0; i < 1; i++) {
    htmlCode += `<p>${text}<p></div>`;
  }
  return htmlCode;
  too;
}

/**
 * Function that returns a String of the url to make the request
 * @param {String} crypto
 * @param {String} currency
 * @returns full url
 */

function fullUrl(crypto, currency) {
  const apiKey = `12E42E01-F5AA-413C-AFAE-BA3180D99EE3`;
  const url = `https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?apikey=${apiKey}`;
  return url;
}
