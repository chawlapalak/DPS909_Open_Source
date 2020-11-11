const axios = require("axios"); //using axios for fetching
const fs = require("fs");

const resFetch = async (endpoint) => {
  let postList = [];
  const res = await axios.get(endpoint);
  if (res.data) {
    res.data.forEach((item) => {
      postList.push(`http://localhost:3000${item.url}`);
    });
    fs.writeFileSync("./postsUrl.txt", JSON.stringify(postList));
  } else {
    console.log("Cant get response from server");
  }
};

module.exports = {
  resFetch,
};
