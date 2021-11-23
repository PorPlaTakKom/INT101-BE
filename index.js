const express =require('express')
const apiRoutes = require('./routes')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/users', apiRoutes)
app.listen('5000', ()=> {console.log('Server BE Started')})