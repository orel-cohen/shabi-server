async function addNewDuty(client, newDuty){
    const result = await client.db("Shabtai").collection("duties").insertOne(newDuty);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    console.log("--> " + result);
}