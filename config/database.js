const {MongoClient, ServerApiVersion} = require('mongodb');
// const uri = "mongodb+srv://kiurd_gentleman:L0veisfake@cluster0.zsmbf.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

exports.run = async function () {
    try {
        let connection = await client.connect();
        let db = connection.db("nodejs_prectise");
        return db.collection("nodejs_prectise");
        // let response = await collection.find({}).toArray();
    } catch (err) {
        console.log(err.stack);
    }
}

