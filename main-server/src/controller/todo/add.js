const { basedir } = global;

const { Todo, schema } = require(`${basedir}/models/todo`);

const add = async (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json(error.message);
  }
  try {
    const { id: owner } = req.user;
    const result = await Todo.create({ ...req.body, owner });
    res.json({
      status: "success",
      code: 201,
      data: {
        todo: result,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = add;
