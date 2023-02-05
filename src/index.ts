// Import express
import express, { Express } from 'express';
import { notImplemented } from './controllers/NotImplementedController';

// Import functions from StudentController
import StudentController from './controllers/StudentController';


// Create your app object
const app: Express = express();
const PORT = 8091;


// Activate json parsing for the request body

// Register your route handlers for the specified endpoints
app.post('/api/students', StudentController.students); //create a new student 
app.get ('/api/students/:studentName' , notImplemented); //Get a student's data
app.get ('/api/students/:studentName}/finalExam', notImplemented); // Get the score the student needs on their final exam to receive the corresponding letter grade.
app.post ('/api/students/:studentName/finalExam', notImplemented); //Calculate what the student's overall score would be if they got the specified grade on the final exam.
app.post ('/api/students/:studentName/grades/:assignmentName', notImplemented); //Update a student's grade for the corresponding grade name.

// Start listening on the chosen port
app.listen(PORT, () => {
    console.log('Server listening on http://localhost:${PORT}');
});