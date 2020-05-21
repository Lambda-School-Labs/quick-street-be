const server = require('./api/sever.js')
require('dotenv').config()

const port = process.env.PORT || 5000;

server.listen(
  PORT, () => {
    console.log(`\n *** LISTENING ON PORT ${PORT} ***\n`.yellow.bold)
  }
)