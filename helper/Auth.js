const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessTokenSecret = "youraccesstokensecret";
  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
            console.log(err);
            return res.sendStatus(403);
          }
          console.log(token);
          console.log(user);
          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

