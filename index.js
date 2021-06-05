require("dotenv").config()

const app = require("./app")
const port = parseInt(process.env.PORT)

app.listen(port, function(){
    console.log(`Application running on ${port}`)
})
