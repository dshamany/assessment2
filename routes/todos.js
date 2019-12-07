var express = require('express');
var router = express.Router();

let listItems = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todos', { title: 'To-Do List', listItems });
});

router.post('/', function (req, res) {
  req.body.isDone = false;
  let item = { content: req.body.content, isDone: false }
  listItems.push(item);
  res.redirect('/');
});

router.post('/:idx', function (req, res) {
  listItems.splice(req.params.idx, 1);
  res.redirect('/');
});

module.exports = router;
