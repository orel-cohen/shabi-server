


async function addNewUser(client, newUser){
    const result = await client.db("Shabtai").collection("users").insertOne(newUser);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    console.log("--> " + result);
}

async function deleteUser(client, newUser){
    const result = await client.db("Shabtai").collection("users").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    console.log("--> " + result);
}

async function updateUser(client, newUser){
    const result = await client.db("Shabtai").collection("users").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    console.log("--> " + result);
}
exports.addNewUser = addNewUser;
