var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.locals.connection.query(
    "SELECT * FROM answers",
    function (error, result, fields) {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          response: {
            data: result,
          },
        })
      );
    }
  );
});

router.post("/", function (req, res, next) {
  res.locals.connection.query(
    "INSERT INTO answers(name,question_id) VALUES (`${req.body.name},${req.body.question_id}`)",
    function (error, result) {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 201,
          error: null,
          response: {
            data: result,
          },
        })
      );
    }
  );
});

module.exports = router;
