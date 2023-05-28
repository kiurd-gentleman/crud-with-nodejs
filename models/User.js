const connection = require('../config/database');


exports.user = async function () {
    try {
        const connectionCall = await connection.connection();
        return connectionCall.collection("nodejs_prectise");
    } catch (err) {
        console.log(err.stack);
    }
}