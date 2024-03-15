const Task = require('./TaskSchema');

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTaskCategory = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { category: req.body.category }, { new: true });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateTaskPriority = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { priority: req.body.priority }, { new: true });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.viewTasks = async (req, res) => {
  const sortOptions = {};
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sortOptions[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }

  try {
    const tasks = await Task.find({}).sort(sortOptions);
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};