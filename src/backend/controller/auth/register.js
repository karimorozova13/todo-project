const { basedir } = global;

const createError = require(`${basedir}/helpers/errorCreator`);
const { User, schemas } = require(`${basedir}/models/user`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, `${email} is already exist`);
  }
  const result = await User.create(req.body);
  return res.status(201).json({
    nickName: result.userName,
    fullName: `${result.firstName} ${result.lastName}`,
    email: result.email,
  });
};

module.exports = register;
