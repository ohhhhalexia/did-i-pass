// Import express
import express, { Express } from 'express';

post /api/students //create a new student 

get /api/students/{studentName} //Get a student's data

get /api/students/{studentName}/finalExam //Get the score the student needs on their final exam to receive the corresponding letter grade.

post /api/students/{studentName}/finalExam //Calculate what the student's overall score would be if they got the specified grade on the final exam.

post /api/students/{studentName}/grades/{assignmentName} //Update a student's grade for the corresponding grade name.

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