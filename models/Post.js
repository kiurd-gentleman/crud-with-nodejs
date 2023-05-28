const connection = require('../config/database');


exports.post = async function () {
    try {
        const connectionCall = await connection.connection();
        return connectionCall.collection("post");
    } catch (err) {
        console.log(err.stack);
    }
}