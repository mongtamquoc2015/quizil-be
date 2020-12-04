var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.locals.connection.query(
    "SELECT * FROM questions",
    function (error, result, fields) {
      if (error) throw error;
      res.send(result);
    }
  );
});

router.get("/:questionId", function (req, res) {
  let { questionId } = req.params();
  res.locals.connection.query(
    `SELECT * FROM questions WHERE id = ${questionId}`,
    function (error, result) {
      if (error) throw error;
      res.send(result);
    }
  );
});

router.post("/", function (req, res, next) {
  res.locals.connection.query(
    "INSERT INTO questions(name) VALUES (" + req.body.name + ")",
    function (error, result) {
      if (error) throw error;
      res.send(result);
    }
  );
});

module.exports = router;
