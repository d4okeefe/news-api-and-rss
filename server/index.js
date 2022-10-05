// server/index.js
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()
const router = (global.router = express.Router())
app.use('/espn', require('./routes/espnRoutes'))
app.use('/new-yorker', require('./routes/newYorkerRoutes'))
app.use('/new-york-times', require('./routes/nytRoutes'))
app.use('/scientific-american', require('./routes/sciAmRoutes'))
app.use('/washington-post', require('./routes/wapoRoutes'))
app.use('/wired', require('./routes/wiredRoutes'))
app.use(router)
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

// app.use((req, res, next) => {
//   res.status(404)
//   res.type('txt').send('Not found')
// })

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
