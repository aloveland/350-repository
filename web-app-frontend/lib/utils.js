require("isomorphic-fetch");

function getNutritionInfo(name) {
  console.log("Fetching");
  return fetch(`http://34.106.215.20/search?term=${name}`).then(function(resp) {
    return resp.json();
    http://34.106.215.20/search?term=${name}
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getCampInfo: function(camp) {
    return getNutritionInfo(camp).catch(handleError);
  },
};
