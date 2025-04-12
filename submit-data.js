// netlify/functions/submit-data.js
exports.handler = async function(event, context) {
  // Les données que tu veux envoyer à l'ESP32
  const data = {
    pseudo: "MMMMMMMMMM",
    pdp: 3,
    version: "v0.1"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
