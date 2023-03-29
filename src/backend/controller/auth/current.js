const current = async (req, res) => {
  try {
    res.json({
      status: "success",
      code: 200,
      data: {
        user: req.user,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = current;
