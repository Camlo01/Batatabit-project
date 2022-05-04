// LLAVE Acceso CoinAPI.io = 3B1B6709-207F-46FC-B7D1-576A99BBF416
//------------------------------------------
// Nombres de Criptomonedas
// Bitcoin = BTC
// Ethereum = ETH
// Tether = USDT
// Bnb = BNB
//------------------------------------------
// Explicación Link
// https://rest.coinapi.io/v1/exchangerate/{cryptoname}/{to exchange}?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416
// Peticion Precio BITCOIN en Dolares
// https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416

function getBTCPrice() {
  setTimeout(() => {
    fetch(
      "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416"
    )
      .then((response) => response.json())
      .then(function (data) {
        let precio = "$" + Math.trunc(data.src_side_base[0].rate);
        console.log("Se inicializa el precio de BITCOIN en una variable");
        $("#priceBitcoin").html(printPrice(precio));
      })
      .catch((error) => console.log("BITCOIN Se presentó el ERROR " + error));
  }, 400);
}

function getETHPrice() {
  setTimeout(() => {
    fetch(
      "https://rest.coinapi.io/v1/exchangerate/ETH/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416"
    )
      .then((response) => response.json())
      .then(function (data) {
        let precio = "$" + Math.trunc(data.src_side_base[0].rate);
        console.log("Se inicializa el precio del ETHEREUM en una variable");
        $("#priceEthereum").html(printPrice(precio));
      })
      .catch((error) => console.log(" ETHEREUM Se presentó el ERROR " + error));
  }, 800);
}

function getUSDTPrice() {
  setTimeout(() => {
    fetch(
      "https://rest.coinapi.io/v1/exchangerate/USDT/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416"
    )
      .then((response) => response.json())
      .then(function (data) {
        let tetherValue = data.rate;
        let precio = "$" + tetherValue.toFixed(2);
        console.log("Se inicializa el precio del TETHER en una variable");
        $("#priceTether").html(printPrice(precio));
      })
      .catch((error) => console.log("TETHER Se presentó el ERROR " + error));
  }, 1200);
}

function getBNBPrice() {
  setTimeout(() => {
    fetch(
      "https://rest.coinapi.io/v1/exchangerate/BNB/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416"
    )
      .then((response) => response.json())
      .then(function (data) {
        let precio = "$" + Math.trunc(data.src_side_base[0].rate);
        console.log("Se inicializa el precio del BNB");
        $("#priceBnb").html(printPrice(precio));
      })
      .catch((error) => console.log(" BNB Se presentó el ERROR " + error));
  }, 1600);
}

//Funcion imprimir precio en etiqueta parrafo
function printPrice(precio) {
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + precio + "<p>";
  }
  return parrafo;
}
