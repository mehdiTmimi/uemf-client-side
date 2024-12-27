const express = require("express")
const PORT = 3001
const URLApi = "http://localhost:3000/users"
// const app
const server = express() // il retourne un serveur
// configuration
server.get("/allusers", (req, res) => {
    fetch(URLApi)// by default the method is GET
        .then(async response => {
            let body = await response.text()
            res.send(body)
        })

})
server.get("/uppercaseusers", (req, res) => {
    fetch(URLApi)// by default the method is GET
        .then(async response => {
            let body = await response.json()
            body = body.map(user => {
                return {
                    name: user.name.toUpperCase(),
                    city: user.city.toUpperCase(),
                    id: user.id
                }
            })
            res.json(body)
        })

})

//demarrage
server.listen(PORT, err => {
    if (err)
        return console.error(err)
    console.log(`server started at PORT ${PORT}`)
})