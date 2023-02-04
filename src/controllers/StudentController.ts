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

