const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { basedir } = global;

const { User, schemas } = require(`${basedir}/models/user`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  const { email, password, firstName, lastName, userName } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({ message: `${email} is already exist` });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);

  const result = await User.create({
    email,
    firstName,
    lastName,
    userName,
    password: hashPassword,
    avatarUrl,
  });

  return res.status(201).json({
    nickName: result.userName,
    fullName: `${result.firstName} ${result.lastName}`,
    email: result.email,
  });
};

module.exports = register;
