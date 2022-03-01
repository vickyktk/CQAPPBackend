const express = require('express')
const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/routes'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))