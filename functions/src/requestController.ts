import * as express from 'express';
import { db } from './config/firebase';
// const axios = require('axios');
const app = express();

interface User {
    firstName: String,
    lastName: String,
    email: String,
    employeeID: Number,
    companyID: Number,
    contactNo: String,
}

app.post('/createUser', async (req, res) => {
    try {
        const employee: User = {
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: req.body['email'],
            employeeID: req.body['employeeID'],
            companyID: req.body['companyID'],
            contactNo: req.body['contactNo']
        }

        const newDoc = await db.collection('users').add(employee)
        res.status(200).send(`New user created: ${newDoc.id}`)
    } catch (error){
        res.status(400).send("All information must be filled in")
    }
})

export { app }