import ballerina/http;
import ballerinax/mongodb;

// HTTP Listener on port 8080
listener http:Listener server = new(8080);

// MongoDB client configuration
mongodb:Client mongoClient = check new (mongodb:ConnectionConfig {
    host: "localhost",
    port: 27017
});

service /contact on server {

    // POST endpoint to handle form submissions
    resource function post submit(http:Caller caller, http:Request req) returns error? {
        // Parse JSON payload from the request body
        json payload = check req.getJsonPayload();

        // Get the collection from the database
        mongodb:Database db = check mongoClient->getDatabase("test");
        mongodb:Collection collection = check db->getCollection("userConcerns");

        // Insert the data into the collection
        var result = collection->insertOne(payload);

        // Handle insertion result
        if result is mongodb:InsertionResult {
            http:Response res = new;
            res.setJsonPayload({ message: "Data submitted successfully", insertedId: result.insertedId });
            check caller->respond(res);
        } else {
            http:Response res = new;
            res.statusCode = 500;
            res.setPayload("Failed to insert data");
            check caller->respond(res);
        }
    }
}
