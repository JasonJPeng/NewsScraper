var db = require("../models");

module.exports = {
  clearDB: function(req, res) {
    db.Headline.remove({
      saved: false
    })
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};
