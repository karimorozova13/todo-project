const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { basedir } = global;

const { User, schemas } = require(`${basedir}/models/user`);

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    res.status(400).json(error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ message: `${email} doesn't exist` });
  }
  const comparedPassword = await bcrypt.compare(password, user.password);
  if (!comparedPassword) {
    res.status(401).json(`Password isn't correct`);
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });
  try {
    const result = jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.log(error.message);
  }
  return res.json({ token });
};

module.exports = login;
