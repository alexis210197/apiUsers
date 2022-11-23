const express = require("express")

const port = 9000

const app = express()

const taskRouter = require('./tasks/task.router')

app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})


app.use('/api', taskRouter)


app.listen(port, () => {
    console.log(`server starter at port ${port}`);
})