const bcrypt = require("bcryptjs");

const { basedir } = global;

const createError = require(`${basedir}/helpers/errorCreator`);
const { User, schemas } = require(`${basedir}/models/user`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    res.status(400).json(error.message);
    // throw createError(400, error.message);
  }
  const { email, password, confirmPassword } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json(`${email} is already exist`);
    // throw createError(409, `${email} is already exist`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);

  const result = await User.create({
    ...req.body,
    password: hashPassword,
    confirmPassword: hashConfirmPassword,
  });
  return res.status(201).json({
    nickName: result.userName,
    fullName: `${result.firstName} ${result.lastName}`,
    email: result.email,
  });
};

module.exports = register;
