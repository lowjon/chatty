const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(express.static('assets'))
app.use(bodyParser.json())

let messages = []

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages})
})

app.post('/messages', function (req, res, next) {
  // console.log(req.body);
  messages.push({ message: req.body.message, time: new Date(), user: req.body.userName })
  res.status(200).json({messages: messages})
})



app.listen(3000, function () {
  console.log('now listening @ port 3000');
})
