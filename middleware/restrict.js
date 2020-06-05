const jwt = require("jsonwebtoken");
const secret = process.env.JWT_secret;
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const authError = { message: "Invalid Credentials" };
  if (token) {
    jwt.verify(token, secret, (err, decodedPayload) => {
      if (err) {
        res
          .status(401)
          .json({ message: "Invalid Credentials, we think...", err });
      } else {
        req.token = decodedPayload;
        next();
      }
    });
  } else {
    res.status(500).json(authError);
  }
};
