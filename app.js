const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routers/authRouter');
const productRoutes = require("./Routers/productRouter")
const userRoutes = require("./Routers/userRoutes")
const app = express();

app.use(express.json());

app.use(cors({origin: "http://localhost:5174", credentials: "true"}));

const PORT = process.env.PORT || 8005;

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(PORT,()=>{
    console.log(`App listinng on port ${PORT}`)
})