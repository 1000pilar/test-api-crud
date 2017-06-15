var Transaction = require('../models/transaction.js')

module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(transactions)
    })
  },
  create: function(req, res) {
    var transaction = new Transaction({
    memberid: req.body.memberid,
    days: req.body.days,
    price: req.body.price,
    booklist: req.body.booklist
  });
    transaction.save(function (err, result) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(result)
    });
  },
  update: function(req, res) {
    Transaction.update({ _id: req.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(result)
    });
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(result)
    });
  }
}
