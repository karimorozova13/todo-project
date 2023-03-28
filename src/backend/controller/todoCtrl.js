const service = require("../models/todo");

const get = async (req, res, next) => {
  const { id: owner } = req.user;
  try {
    const results = await service.getAll(owner);
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

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getTodo(id);
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

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.removeTodo(id);
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

const add = async (req, res, next) => {
  try {
    const result = await service.addTodo(req);
    res.json({
      status: "success",
      code: 200,
      data: {
        todo: result,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.updateTodo(id, req.body);
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

module.exports = {
  get,
  getById,
  remove,
  add,
  update,
};
