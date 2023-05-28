const connection = require('../config/database');


exports.postImages = async function () {
    try {
        return connection.connection().collection("post_images");
        // let response = await collection.find({}).toArray();
    } catch (err) {
        console.log(err.stack);
    }
}