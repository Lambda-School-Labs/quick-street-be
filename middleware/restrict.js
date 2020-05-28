const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const authError = { message: "Invalid Credentials" };
  if (token) {
    jwt.verify(token, process.env.JWT_Secret, (err, decodedPayload) => {
      if (err) {
        res.status(401).json(authError, err);
      } else {
        req.token = decodedPayload;
        console.log("decodedToken", decodedPayload);
        next();
      }
    });
  } else {
    res.status(401).json(authError);
  }
};
