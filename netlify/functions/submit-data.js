exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      version: "v0.1.5",
      importance: "Facultative", // Facultative | Majeure | Urgente
      date_de_sortie: "12-06-25",
      commentaire: "Test"
    })
  };
};
