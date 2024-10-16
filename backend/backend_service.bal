import ballerina/http;
import ballerinax/mongodb;

// HTTP Listener on port 8080 with CORS support.
http:CorsConfig corsConfig = {
    allowOrigins: ["http://localhost:3000"],
    allowMethods: ["POST"]
};

listener http:Listener server = new(8080, config = {cors: corsConfig});

mongodb:Client mongoClient = check new ({
    connectionString: "mongodb+srv://dbuser_01:jA1QqNNdyFStxtxz@cluster0.9w9u243.mongodb.net/note-taking-app?retryWrites=true&w=majority&appName=Cluster0"
,connection: {}});




mongodb:Client mongoClient = check new (mongoConfig);

// Function to check the connection to the MongoDB database.
function checkDatabaseConnection(mongodb:Client dbClient) returns boolean {
    // Try to get the database and check if it exists.
    mongodb:Database db = check dbClient->getDatabase("test");
    return db is mongodb:Database; // Return true if the database is valid.
}

service "/contact" on server {

    // POST endpoint to handle form submissions.
    resource function post submit(http:Caller caller, http:Request req) returns error? {
        // Parse JSON payload from the request body.
        json payload = check req.getJsonPayload();

        // Check if the database connection is valid.
        if !checkDatabaseConnection(mongoClient) {
            http:Response res = new;
            res.statusCode = 500;
            res.setPayload("Failed to connect to the database");
            check caller->respond(res);
            return;
        }

        // Retrieve the collection from MongoDB.
        mongodb:Database db = check mongoClient->getDatabase("test");
        mongodb:Collection collection = check db->getCollection("userConcerns");

        // Insert the payload into the MongoDB collection.
        // Convert JSON payload to a record type.
        record {| anydata...; |} document = check payload.cloneWithType(record {| anydata...; |});
        var result = collection->insertOne(document);

        // Prepare the HTTP response.
        http:Response res = new;
        if result is mongodb:InsertOneResult {
            // Successful insertion, respond with the inserted ID.
            res.setJsonPayload({
                message: "Data submitted successfully",
                insertedId: result.insertedId
            });
        } else {
            // Insertion failed, respond with an error message.
            res.statusCode = 500;
            res.setPayload("Failed to insert data");
        }
        check caller->respond(res); // Send response back to the client.
    }
}
