/*** IMPORT */
const express = require('express')
const cors = require('cors')

/*** INIT API */
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*** IMPORT ROUTERS */
const user_router = require('./routes/user_r')

/*** MAIN ROUTER */
app.get('/ghghhgghhgjgj', (req, res) => res.send(`I'm online. All is OK !`))

app.use('/users', user_router)

app.all('*', (req, res) => res.status(501).send("What the hell are you doing !"))


module.exports = app