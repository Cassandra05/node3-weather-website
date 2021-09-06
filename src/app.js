const path = require('path')
const express = require("express");

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express();

app.use(express.static())

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
  res.send({
      name: 'Andrew',
      age: '27'
  })
})
app.get('/about', (req, res) => {
  res.send('About');
}) 

app.get('/weather', (req, res) => {
  res.send("Your weather");
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
})
