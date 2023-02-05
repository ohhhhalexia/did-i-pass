import { Request, Response } from 'express';
import { students, addStudent, getStudent } from '../models/StudentsModel';

function getAllStudents(req: Request, res: Response): void {
  res.json(students);
}



function getStudent(studentName: string): Student | undefined {
    // If the student's name is not in `students`
      // then return undefined
  
    // Return the student's information (their name is the key for `students`)
  }



  function createNewStudent(req: Request, res: Response): void {
  
    const studentData = // Assign `req.body` as a `NewStudentRequest`
  
    const didAddStudent = // Call the `addStudent` function using the student's data
  
    // If the student's data was not added successfully
      // Responds with status 409 (This means 409 Conflict)
      // return from the function
  
    // Send status 201 (This means 201 Created)
  }

