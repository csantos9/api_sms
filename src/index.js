const http = require('http')
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const router = express.Router()
app.use(bodyParser.json())
const token = ""


app.post('/Login', (req, res, next) => {
    const options = {
        protocol: 'http:',
        login: 'mario.kojima@planetun.com.br',
        password: '538273',
        host: 'api.flexcontact.com.br',
        path: '/Messaging/Login',
        method: 'POST'
    }
    req = http.request(options, (res) => {
        console.log(res)
    })
    next(req)
    res.end()
})

const porta = 3000
app.set('port', porta)
const server = http.createServer(app)
server.listen(porta)

console.log(`Servidor rodando na porta ${porta}`)