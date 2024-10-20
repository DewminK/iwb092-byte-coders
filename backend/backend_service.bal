import ballerina/http;
import ballerinax/mongodb;

// Define the CORS configuration.
@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://www.m3.com", "http://www.hello.com"],
        allowCredentials: false,
        allowHeaders: ["CORELATION_ID"],
        exposeHeaders: ["X-CUSTOM-HEADER"],
        maxAge: 84900
    }
}
service /crossOriginService on new http:Listener(9092) {

    @http:ResourceConfig {
        cors: {
            allowOrigins: ["http://www.bbc.com"],
            allowCredentials: true,
            allowHeaders: ["X-Content-Type-Options", "X-PINGOTHER"]
        }
    }
    resource function get company() returns string {
        return "middleware";
    }

    resource function post lang(@http:Payload string lang) returns string {
        return lang;
    }
}

http:CorsConfig corsConfig = {
    allowOrigins: ["http://localhost:3000"],
    allowMethods: ["POST"]
};
listener http:Listener server = new(8080);

mongodb:Client mongoClient = check new ({
    connectionString: "mongodb+srv://dbuser_01:jA1QqNNdyFStxtxz@cluster0.9w9u243.mongodb.net/note-taking-app?retryWrites=true&w=majority&appName=Cluster0",
    connection: {}
});

// Function to check the connection to the MongoDB database.
function checkDatabaseConnection(mongodb:Client dbClient) returns boolean {
    mongodb:Database db = check dbClient->getDatabase("test");
    return db is mongodb:Database;
}

// Define the form submission data type.
public type UserConcern record {
    string name;
    string email;
    string message;
};

@http:ServiceConfig {
    cors: corsConfig
}
service "/contact" on server {

    // POST endpoint to handle form submissions.
    resource function post submit(http:Caller caller, http:Request req) returns error? {
        // Parse JSON payload from the request body.
        json payload = check req.getJsonPayload();
        UserConcern userConcern = check payload.cloneWithType(UserConcern);

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

        // Insert the form data into the MongoDB collection.
        var result = collection->insertOne(userConcern);

        // Prepare the HTTP response.
        http:Response res = new;
        if result is mongodb:InsertOneResult {
            res.setJsonPayload({
                message: "Data submitted successfully",
                insertedId: result.insertedId
            });
        } else {
            res.statusCode = 500;
            res.setPayload("Failed to insert data");
        }
        check caller->respond(res);
    }
}
