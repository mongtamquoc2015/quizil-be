var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.locals.connection.query(
    "SELECT * FROM questions",
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
    "INSERT INTO questions(name) VALUES (" + req.body.name + ")",
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
