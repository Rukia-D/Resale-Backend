const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({origin: "http://localhost:5174", credentials: "true"}));

const PORT = process.env.PORT || 8005;

app.listen(PORT,()=>{
    console.log(`App listinng on port ${PORT}`)
})