import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  //install package cookie-parser
  const token = req.cookies.access_token;
    //if there is token, check its correct or not
  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();// go next that is updateUser
  });
};
