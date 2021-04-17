// import { connectionStr } from './src/config/ConnectionString';
const express = require('express')
const { MongoClient } = require('mongodb');
const users = require('./src/users');
const app = express()
const port = 3000

/**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
const conn = "test";
MongoClient.connect(conn, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('Shabtai')

        // app.use(/* ... */)
        // app.get(/* ... */)
        // app.post(/* ... */)
        // app.listen(port, () => {
        //     console.log(`Example app listening at http://localhost:${port}`)
        // })
    }).catch((e) => {
        console.log(e);
    }) 

// app.get('/', (req, res) => {
//     console.log("new usr");
//     let usr = {
//         name: "Orel Cohen",
//         idfID: "8070893",
//         phone: "0508574722"
//     }
//     users.addNewUser(client, usr);
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })