require("isomorphic-fetch");




function getFoodInfo(name) {
  console.log("Fetching");
  console.log("this is name " + name);
  return fetch(`http://34.106.215.20/api/search?term=${name}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getFoodInfo: function(camp) {
    return getFoodInfo(camp).catch(handleError);
  },
};
