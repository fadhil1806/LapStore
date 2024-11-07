var express = require('express');
const { addCategory, getData, editCategory } = require('../controllers/product_categories');
const { body } = require('express-validator');
var router = express.Router();
const validate = require('../middleware/validations');

const validation = [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required')
]

router.get('/category/product', getData);
router.post('/category/product/create', validate(validation), addCategory);
router.put('/category/product/update/:id', validate(validation), editCategory);



module.exports = router