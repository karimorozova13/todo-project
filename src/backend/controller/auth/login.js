const bcrypt = require("bcryptjs");

const { basedir } = global;

const { User, schemas } = require(`${basedir}/models/user`);
const createError = require(`${basedir}/helpers/errorCreator`);

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    res.status(400).json(error.message);
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ message: `${email} doesn't exist` });
    throw createError(401, `${email} doesn't exist`);
  }
  const comparedPassword = await bcrypt.compare(password, user.password);
  if (!comparedPassword) {
    res.status(401).json(`Password isn't correct`);
    throw createError(401, `Password isn't correct`);
  }
  const token = "fsafasf";
  return res.json({ token });
};

module.exports = login;
