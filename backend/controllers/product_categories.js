const generateId = require("../helpers/generateId");
const responseHelpers = require("../helpers/responseHelper");
const product_categories = require("../models/product_categories");

async function getData(req, res) {
    try {
        const data = await product_categories.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })

        return responseHelpers(res, 200, data)
    }
    catch (error) {
        console.log(error)
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
}

async function addCategory(req, res) {
    const { name, description } = req.body;
    const id = await generateId(15);

    try {
        const existingCategory = await product_categories.findOne({ where: { name } })
        if (existingCategory) return responseHelpers(res, 409, { message: 'category already exist' })

        await product_categories.create({ id, name, description })
        return responseHelpers(res, 201, { message: 'Successfully created category' });
    }
    catch (error) {
        console.log(error)
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
}

async function editCategory(req, res) {
    const { id } = req.params
    const { name, description } = req.body

    try {
        const [updated] = await product_categories.update({
            name, description
        }, { where: { id } })

        if (updated) {
            return responseHelpers(res, 200, { message: 'Successfully updated category' });
        } else {
            return responseHelpers(res, 404, { message: 'Category not found' });
        }

    }
    catch (error) {

    }
}

module.exports = { addCategory, getData, editCategory }