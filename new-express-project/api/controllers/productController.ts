async function createProduct(req, res) {
    const {
        name, brand_id, description, price, stock, weight, material, country_of_origin, type, thumbnail_url, thumbnail_alt, status, specification, condition
    } = req.body

    const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    res.status(200).json({ status: true });
}

module.exports = {createProduct}