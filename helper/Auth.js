const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessTokenSecret = "youraccesstokensecret";
  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

