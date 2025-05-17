exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      version: "vBeta-0.4",
      importance: "Facultative", // tu peux mettre "mineure", "critique", etc.
      date_de_sortie: "17-05-25",
      commentaire: "Test"
    })
  };
};
