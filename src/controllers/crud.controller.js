// Create
const createOne = (model)  => async (req, res) => {
    const createdItem = await model.create(req.body);
    res.status(201).json(createdItem);
}

// Read one
const getOne = (model)  => async (req, res) => {
    const item = await model.findById(req.params.id);
    res.status(200).json(item);
}

// Read many
const getAll = (model)  => async (req, res) => {
    const items = await model.find();
    res.status(200).json(items);
}

// Update
const updateOne = (model)  => async (req, res) => {
    const updatedItem = await model.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true}
    );
    res.status(200).json(updatedItem);
}

// Delete
const deleteOne = (model)  => async (req, res) => {
    const deletedItem = await model.getByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem);
}

module.exports = (model) => ({
    post: createOne(model),
    getOne: getOne(model),
    getAll: getAll(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model)
})