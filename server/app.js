const express = require('express')


const db = require('./config/db.config')
db()


const PORT = 4000

const app = express()

app.use(express.json())


const roomRouter = require('./routes/room.routes')
app.use('/', roomRouter)

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`)) 