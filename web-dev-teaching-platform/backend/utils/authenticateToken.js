const jwt = require("jsonwebtoken");

// protected route
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;
    if (!token)
      return res
        .status(403)
        .send({ auth: false, message: "No token provided." });

    await jwt.verify(token, process.env.JWT_SECRET);
    // if everything good, save to request for use in other routes
    // req.auth = {
    //   username: decoded.data.username,
    //   isAdmin: decoded.data.isAdmin,
    // };
    next();
  } catch (err) {
    return res.status(500).send({
      auth: false,
      message: "Failed to authenticate token.",
      error: err,
    });
  }
};

module.exports = { authenticateToken };
