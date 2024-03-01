const express = require('express');
const errorHandler = require('./middlewares/errorHandler')
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb()
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler);

//Root of default routes
app.use("/", require("./routes/userRoutes"))

//Root  of admins routes
app.use("/admin", require("./routes/adminRoutes"))



app.listen(port, () => {
    console.log(`Server running on this port | ${port}  http://localhost:${port}`);
})


