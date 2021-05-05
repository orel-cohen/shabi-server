async function addNewDuty(client, newDuty){
    return await client.db("Shabtai").collection("duties").insertOne(newDuty);
    
}
async function deleteDuty(client, deletedDuty){
    return await client.db("Shabtai").collection("duties").insertOne(deletedDuty);
}

async function updateDuty(client, updatedDuty){
    return await client.db("Shabtai").collection("duties").insertOne(updatedDuty);
}

exports.addNewDuty = addNewDuty;
exports.deleteDuty = deleteDuty;
exports.updateDuty = updateDuty;