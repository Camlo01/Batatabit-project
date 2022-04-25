// LLAVE Acceso CoinAPI.io
//
// 3B1B6709-207F-46FC-B7D1-576A99BBF416
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

// ------------------------------------------------------------------------------------------------
// ----------------------------------------- GETS -------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Bitcoin = BTC
function getBTCPrice() {
  console.log("se trae precio Bitcoin getBTCPrice()");
  $.ajax({
    url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416",
    type: "GET",
    dataType: "JSON",
    success: function (bitcoin) {
      // Asignando precio a una bariable = pasarlo a entero
      let precio = "$" + Math.trunc(bitcoin.src_side_base[0].rate);
      console.log("de inicializa el precio del bitcoin en una variable");
      printBTCPrice(precio);
      console.log("se imprime en el DOM el precio del Bitcoin");
    },
    error: function (error) {
      console.log("ERROR 429: Too Many Requests, se coloca valor por defecto");
      printBitcoinDefault();
    },
  });
}

// Ethereum = ETH
function getETHPrice() {
  console.log("se trae precio Ethereum");
  $.ajax({
    url: "https://rest.coinapi.io/v1/exchangerate/ETH/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416",
    type: "GET",
    dataType: "JSON",
    success: function (ethereum) {
      // Asignando precio a una bariable = pasarlo a entero
      let precio = "$" + Math.trunc(ethereum.src_side_base[0].rate);
      console.log("de inicializa el precio del Ethereum en una variable");
      printBTCPrice(precio);
      console.log("se imprime en el DOM el precio del Ethereum");
    },
    error: function (error) {
      console.log("ERROR 429: Too Many Requests, se coloca valor por defecto");
      printEthereumDefault();
    },
  });
}

// Tether = USDT
function getUSDTPrice() {
  console.log("se trae precio Tether");
  $.ajax({
    url: "https://rest.coinapi.io/v1/exchangerate/USDT/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416",
    type: "GET",
    dataType: "JSON",
    success: function (tether) {
      // Asignando precio a una bariable = pasarlo a entero
      let precio = "$" + Math.trunc(tether.src_side_base[0].rate);
      console.log("de inicializa el precio del Tether en una variable");
      printUSDTPrice(precio);
      console.log("se imprime en el DOM el precio del Tether");
    },
    error: function (error) {
      console.log("ERROR 429: Too Many Requests, se coloca valor por defecto");
      printTetherDefault();
    },
  });
}

// Bnb = BNB
function getBNBPrice() {
  console.log("se trae precio Bnb");
  $.ajax({
    url: "https://rest.coinapi.io/v1/exchangerate/BNB/USD?apikey=3B1B6709-207F-46FC-B7D1-576A99BBF416",
    type: "GET",
    dataType: "JSON",
    success: function (bnb) {
      // Asignando precio a una bariable = pasarlo a entero
      let precio = "$" + Math.trunc(bnb.src_side_base[0].rate);
      console.log("de inicializa el precio del Bnb en una variable");
      printUSDTPrice(precio);
      console.log("se imprime en el DOM el precio del Bnb");
    },
    error: function (error) {
      console.log("ERROR 429: Too Many Requests, se coloca valor por defecto");
      printBnbDefault();
    },
  });
}

// ------------------------------------------------------------------------------------------------
// ----------------------------------- Print in Document ------------------------------------------
// ------------------------------------------------------------------------------------------------

// Printar precio de BITCOIN en tabla
function printBTCPrice(precio) {
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + precio + "</p>";
  }

  $("#priceBitcoin").html(parrafo);
}

//Printar precio de Ethereum en tabla
function printETHPrice(precio) {
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + precio + "</p>";
  }

  $("#priceEthereum").html(parrafo);
}

//Printar precio de Tether en tabla
function printUSDTPrice(precio) {
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + precio + "</p>";
  }

  $("#priceEthereum").html(parrafo);
}

//Printar precio de Bnb en tabla
function printBnbPrice(precio) {
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + precio + "</p>";
  }

  $("#priceBnb").html(parrafo);
}

// ------------------------------------------------------------------------------------------------
// ----------------------------------- Solucion 429 -----------------------------------------------
// ------------------------------------------------------------------------------------------------

function printBitcoinDefault() {
  let valorDefecto = "$40.122";
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + valorDefecto + "</p>";
  }
  $("#priceBitcoin").html(parrafo);
}

function printEthereumDefault() {
  let valorDefecto = "$2.965";
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + valorDefecto + "</p>";
  }
  $("#priceEthereum").html(parrafo);
}

function printTetherDefault() {
  let valorDefecto = "$3.935";
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + valorDefecto + "</p>";
  }
  $("#priceTether").html(parrafo);
}

function printBnbDefault() {
  let valorDefecto = "$402";
  let parrafo = "<price>";
  for (i = 0; i < 1; i++) {
    parrafo += "<p>" + valorDefecto + "</p>";
  }
  $("#priceBnb").html(parrafo);
}
