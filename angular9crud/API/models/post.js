const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//define collectionand shema for Post
let Post = new Schema({
  title: {
    type: String
  },
  contenu: {
    type: String
  }
}, {
  collection: 'Post'
});

module.exports = mongoose.model('Post', Post);
