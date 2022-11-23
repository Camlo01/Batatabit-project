/**
 * ERROR 401 prints a message on the console indicating a
 * problem with the apiKey
 */
function authenticationMessage() {
  console.log(`ERROR 401: Problema de autentificación`);
  console.log(`Tienes problemas con tu apiKey `);
}

/**
 * ERROR 429 Prints a message on the console indicating the
 * type of error 429 and warns that it sets a default value
 */
function tooManyRequestsMessage() {
  console.log(`ERROR 429: límite de peticiones`);
  console.log(`Se define un valor por defecto para esta moneda`);
}

/**
 * ERROR 500 Prints a message on the console indicating
 * an error with the request in the server
 */
function errorMessage() {
  console.log(`ERROR 500: Problema con la autentificación`);
  console.log(`Puede que la apiKey no esté disponible`);
  console.log(`Intenta más tarde`);
}

/**
 * ERROR 550 Prints a message on the console indicating that
 * in the server is no data of the crypto currency
 */
function noDataMessage() {
  console.log(`ERROR 550: No data`);
  console.log(`Parece que el servidor no está proveyendo`);
  console.log(`la información sobre esta crypto coin`);
}

export {
  authenticationMessage,
  tooManyRequestsMessage,
  errorMessage,
  noDataMessage,
};
