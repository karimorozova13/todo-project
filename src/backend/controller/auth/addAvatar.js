const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

cloudinary.config({
  cloud_name: "dxdhipnwm",
  api_key: "256213228284766",
  api_secret: "v2BsrSsReD0QPd-1IV5oT_L4EGQ",
});

const addAvatar = async (req, res) => {
  const { _id } = req.user;
  cloudinary.uploader.upload(req.file.path, async (err, result) => {
    await fs.unlink(req.file.path);
    await User.findByIdAndUpdate(_id, { avatarUrl: result.secure_url });
    res.status(200).json({ url: result.secure_url });
  });
};

module.exports = addAvatar;
