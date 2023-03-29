const { basedir } = global;

const { Todo } = require(`${basedir}/models/todo`);

const getAll = async (req, res, next) => {
  const { id: owner } = req.user;

  try {
    const results = await Todo.find({ owner }).populate(
      "owner",
      "firstName lastName userName email"
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        todos: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = getAll;
