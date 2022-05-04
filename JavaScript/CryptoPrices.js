// LLAVE Acceso CoinAPI.io
//
// 3B1B6709-207F-46FC-B7D1-576A99BBF416
//
// Peticion Precio BITCOIN en Dolares
// https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416
//------------------------------------------

// Entender criptomonedas

// Bitcoin = BTC
// Ethereum = ETH
// Tether = USDT
// Bnb = BNB

// entender link
// https://rest.coinapi.io/v1/exchangerate/{cryptoname}/{to exchange}?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416

function getBTCPrice() {
  //   let url = 'https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416';

  fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getBTCPrice();
