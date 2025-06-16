const { basedir } = global;

const { Todo } = require(`${basedir}/models/todo`);

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Todo.findByIdAndRemove({ _id: id });
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { todo: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found todo id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = remove;
