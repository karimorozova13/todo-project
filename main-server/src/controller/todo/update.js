const { basedir } = global;

const { Todo, schema } = require(`${basedir}/models/todo`);

const update = async (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json(error.message);
  }

  const { id } = req.params;

  try {
    const result = await Todo.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
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

module.exports = update;
