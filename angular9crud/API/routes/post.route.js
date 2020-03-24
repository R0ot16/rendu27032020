const express = require('express');
const app = express();
const postRoutes = express.Router();
// Require Post Model in our Routes module
let Post = require('../models/Post');
//Define store route
postRoutes.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
      res.status(200).json({
        'Post': 'Le poste a bien été ajouté '
      });
    })
    .catch(err => {
      res.status(400).send("impossible d'enregistrer dans la base de données")
    });
});
// Define get data(index or listing) route
postRoutes.route("/").get(function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

postRoutes.route('/single/:id').get((req, res) => {
  Post.findById(req.params.id, (err, rep) => {
    if(err) throw err;

    res.json(rep);
  });
});

postRoutes.route('/edit').post((req, res) => {
  Post.findOne({_id: req.body.id}, (err, rep) => {
    if(err) throw err;



    rep.title = req.body.title;
    rep.contenu = req.body.content;

    rep.save().then(() => {
      res.json('Update success');
    }).catch(err => {
      res.status(400).send("unable to update the database");
    });
  });
});

postRoutes.route('/delete/:id').get((req, res) => {
  Post.deleteOne({_id: req.params.id}).then(() => {
    res.json('Delete success');
  }).catch(err => {
    res.status(400).send("unable to delete the database");
  });
});
module.exports = postRoutes;
