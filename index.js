const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Đồ án hệ thống thông tin và truyền thông')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})