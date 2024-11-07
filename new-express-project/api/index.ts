const express = require("express");
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

const routeProducts = require('./routes/product')

// Middleware
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: 'postgres://default:m1UdT4vEuKys@ep-super-scene-a1qc4g6k-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb',
  ssl: { rejectUnauthorized: false }
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use('/api', routeProducts)

// app.post('/api/products', async (req, res) => {
//   const {
//     name, brand_id, description, price, stock, weight, material, country_of_origin, type, thumbnail_url, thumbnail_alt, status, specification, condition
//   } = req.body

//   const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

//   res.status(200).json({ status: true });
// });

// Menjalankan server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}  .`));

module.exports = app;
