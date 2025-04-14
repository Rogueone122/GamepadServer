exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      version: "v0.2",
      importance: "facultative" // tu peux mettre "mineure", "critique", etc.
    })
  };
};
