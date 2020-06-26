const server = require('./api/server.js')
require('dotenv').config()

const PORT = process.env.PORT || 8000;

server.listen(
  PORT, () => {
    console.log(`\n *** LISTENING ON PORT ${PORT} ***\n`)
  }
)