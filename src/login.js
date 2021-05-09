async function isUserExist(client, user){
    return await client.db("Shabtai").collection("users").find({ "_id": user._id }).limit(1).size();;
}

exports.isUserExist = isUserExist;
