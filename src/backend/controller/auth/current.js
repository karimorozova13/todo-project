const current = async (req, res) => {
  try {
    res.json({
      status: "success",
      code: 204,
      data: {
        user: req.user,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = current;
