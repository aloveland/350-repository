require("isomorphic-fetch");




function getCampInfo(name) {
  console.log("Fetching");
  console.log("this is name " + name);
  return fetch(`https://34.106.215.20/search?term=${name}`).then(function(resp) {
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
