const express = require('express')
const cors = require('cors')
const sendEmail = require('./email')

const app = express()

app.use(express.json())
app.use(cors())

const port = 5000

app.get('/', (req, res) => {
    res.status(200)
    .json({
        status:'success',
        message:"Welcome to our API"
    })
})

app.post('/verifyEmail', async (req, res) => {
    try{

        console.log("hello word")
       await sendEmail({
            email: req.body.email,
            username: req.body.username,
            subject:'Account Verification',
            url: req.body.url,
            template: 'verificationEmail'
        })

        res.status(200)
        .json({
            status:'success',
            message:'email sent succefully'
        })
    } catch(error) {
        console.log(error)
        res.status(400)
        .json({
            status: 'fail',
            message: error
        })
    }
})
app.post('/welcomeEmail', async (req, res) => {
    try{

        console.log("hello word")
       await sendEmail({
            email: req.body.email,
            template: 'welcomeEmail',
            subject:'Welcome to mt5cryptoradar - Your Journey Begins Here'
        })

        res.status(200)
        .json({
            status:'success',
            message:'email sent succefully'
        })
    } catch(error) {
        console.log(error)
        res.status(400)
        .json({
            status: 'fail',
            message: error
        })
    }
})
app.post('/withdrawalPin', async (req, res) => {
    try{

        console.log("hello word")
       await sendEmail({
            email: req.body.email,
            username: req.body.username,
            template: 'withdrawalPin',
            subject:'Withdrawal Pin',
            pin: req.body.pin
        })

        res.status(200)
        .json({
            status:'success',
            message:'email sent succefully'
        })
    } catch(error) {
        console.log(error)
        res.status(400)
        .json({
            status: 'fail',
            message: error
        })
    }
})
app.post('/depositeApproval', async (req, res) => {
    try{

        console.log("hello word")
       await sendEmail({
            email: req.body.email,
            username: req.body.username,
            template: 'depositeApproval',
            subject:'Deposite Confirmed',
            amount: req.body.amount
        })

        res.status(200)
        .json({
            status:'success',
            message:'email sent succefully'
        })
    } catch(error) {
        console.log(error)
        res.status(400)
        .json({
            status: 'fail',
            message: error
        })
    }
})
app.post('/compose', async (req, res) => {
    try{

        console.log("hello word")
       await sendEmail({
            email: req.body.email,
            username: req.body.username,
            template: 'compose',
            subject:req.body.subject,
            message: req.body.message
        })

        res.status(200)
        .json({
            status:'success',
            message:'email sent succefully'
        })
    } catch(error) {
        console.log(error)
        res.status(400)
        .json({
            status: 'fail',
            message: error
        })
    }
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})