export const validator = (schema) => (req, res, next) => {
  const { error } = schema.safeParse(req.body);
  if (error) {
    console.log("ERROR", error.issues[0].message);
    // const errors = error.errors.map((error) => error.message);
    // req.flash("error", errors);
    return res
      .status(400)
      .send({ message: "Error", data: error.issues[0].message });
  }
  return next();
};
