const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')


app.use(express.json())
app.use(cookieParser())


app.use(require('./request/addDetails'))
app.use(require('./request/bnkDetails'))
app.use(require('./request/delDetails'))
app.use(require('./request/login'))
app.use(require('./request/logout'))
app.use(require('./request/register'))
app.use(require('./request/upDetails'))



const PORT = process.env.PORT ||5000  

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
}
app.listen(PORT, () =>{
    console.log('server is running on port 5000')
})