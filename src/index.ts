import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import http from 'http'

const app = express();

app.use(cors({
    credentials:true
}))

app.use(compression())
app.use(cookieParser())

const server = http.createServer(app);

server.listen(8080, () => {
    console.log(`Server running on localhost port 8080`)
});    