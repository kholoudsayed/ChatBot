const express = require('express')
const app = express()
console.log(app)
const port = 3000
app.get ('/',(req , res )=> res.send ('hello world'))
app.listen(port , () => console.log ('server running') )
