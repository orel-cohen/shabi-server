async function addNewUser(client, newUser){
    return await client.db("Shabtai").collection("users").insertOne(newUser);
}

async function deleteUser(client, deletedUser){
    return await client.db("Shabtai").collection("users").deleteOne({"_id" : deletedUser._id});
}
// TODO replaceOne instead
async function updateUser(client, updatedUser){
    return await client.db("Shabtai").collection("users").updateOne({"_id" : updatedUser._id}, updatedUser, {upsert: true});
}
exports.addNewUser = addNewUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;