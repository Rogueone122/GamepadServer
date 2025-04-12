exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      pseudo: "Rogue",
      pdp: 3,
      version: "v0.1"
    })
  };
};
