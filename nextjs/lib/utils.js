require("isomorphic-fetch");

function getCampInfo(name) {
  console.log("Fetching");
  return fetch(`http://35.190.190.219/api/info?q=${name}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getCampInfo: function(camp) {
    return getCampInfo(camp).catch(handleError);
  },
};
