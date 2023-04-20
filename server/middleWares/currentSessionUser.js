export default function currentSessionUser(req, res, next) {
  const sessionUser = {
    id: req.session?.userId,
    username: req.session?.userName,
  };
  res.locals.sessionUser = sessionUser;
  next();
}
