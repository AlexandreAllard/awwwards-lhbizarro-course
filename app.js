const express = require('express')
const path = require('path'); 
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index',{
    meta: {
        data: {
            title: 'Floema',
            description: 'Metadata description'
        }
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
