// Import express
import express, { Express } from 'express';


// Import functions from StudentController

// Create your app object
const app: Express = express();
const PORT = 8091;


// Activate json parsing for the request body

// Register your route handlers for the specified endpoints

// Start listening on the chosen port
app.listen(PORT, () => {
    console.log('Server listening on http://localhost:${PORT}');
});