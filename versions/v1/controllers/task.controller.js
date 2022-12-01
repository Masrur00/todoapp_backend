const todotask = require("../../../models/todo.model");

const addTask = async (req, res) => {
  try {
    const data = await todotask.create(req.body);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const data = await todotask.deleteOne({ _id: req.body.id });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const updateTask = async (req, res) => {
    // return res.status(200).send(req.body);
  try {
    const data = await todotask.updateOne(
      { _id: req.body.id },
      {
        $set: {
          text: req.body.text,
        },
      }
    );
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const taskDone = async (req, res) => {    
  try {
    const data = await todotask.updateOne(
      { _id: req.body._id },
        {
            $set: {
            isDone: !req.body.isDone,
            },
        }
    );
    return res.status(200).send(data);
  } catch (error) {
        return res.status(400).send({ error: error.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    user = await todotask.find();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};


module.exports = { addTask, deleteTask, getAllTask, updateTask, taskDone };
