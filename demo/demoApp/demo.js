var posts = require('FuseJS/Observable')();

fetch('http://open.bekk.no/Api/Posts/').then(function (res) {
  return res.json();
}).then(function (data) {
  posts.replaceAll(data);
});

module.exports = {
  posts: posts
};
