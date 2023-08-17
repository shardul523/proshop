import express from "express";
import products from './data/products.js'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express()
const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET']
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:productId', (req, res) => {
    const product = products.find(product => product._id === req.params.productId)
    res.json(product)
})

app.listen(PORT, () => console.log('Server running on port ' + PORT))