const express = require('express')
const { MongoClient } = require('mongodb');

const connectionStr = require('./src/config/ConnectionString');
const users = require('./src/users');
let User = require('./src/classes/user');
let Rank = require('./src/classes/Rank');
const app = express()
const port = 4000


app.listen(port, () => {
    console.log(`Shabi server listening at port:${port}`)
})

// Routes
app.post("/setNewUser/", async (req, res) => {
    MongoClient.connect(connectionStr, { useUnifiedTopology: true })
        .then(client => {
            let isSuccess = false;
            let testUser = new User();
            testUser.initNewUserData("8070893", "orel cohen", Rank.SEGEN, 50, ["הורה", "שחר כחול"], []);
            console.log(testUser);
            try {
                isSuccess = users.addNewUser(client, testUser);
            } catch (error) {
                res.send(error);
            }
            res.send(isSuccess);
            
        })
})
app.post("/updateUser/", async (req, res) => {
    MongoClient.connect(conn, { useUnifiedTopology: true })
        .then(client => {
            let isSuccess = false;
            let testUser = new User();
            testUser.initNewUserData("8070893", "orel cohen", Rank.SEGEN, 50, ["הורה", "שחר כחול", "פתור משא"], []);
            console.log(testUser);
            try {
                isSuccess = users.updateUser(client, testUser);
            } catch (error) {
                res.send(error);
            }
            res.send(isSuccess);
            
        })
})
app.post("/deleteUser/", async (req, res) => {
    MongoClient.connect(conn, { useUnifiedTopology: true })
        .then(client => {
            let isSuccess = false;
            let testUser = new User();
            testUser.initNewUserData("8070893", "orel cohen", Rank.SEGEN, 50, ["הורה", "שחר כחול"], []);
            console.log(testUser);
            try {
                isSuccess = users.deleteUser(client, testUser);
            } catch (error) {
                res.send(error);
            }
            res.send(isSuccess);
            
        })
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