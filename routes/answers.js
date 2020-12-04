var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.locals.connection.query(
    "SELECT * FROM answers",
    function (error, result) {
      if (error) throw error;
      res.send(result);
    }
  );
});

router.get("/:questionId", function (req, res, next) {
  let { questionId } = req.params();
  res.locals.connection.query(
    `SELECT * FROM answers WHERE question_id = ${questionId}`,
    function (error, result) {
      if (error) throw error;
      res.send(result);
    }
  );
});

router.post("/", function (req, res, next) {
  res.locals.connection.query(
    "INSERT INTO answers(name,question_id) VALUES (`${req.body.name},${req.body.question_id}`)",
    function (error, result) {
      if (error) throw error;
      res.send(result);
    }
  );
});

module.exports = router;
