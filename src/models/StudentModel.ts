const students: StudentManager = {};

// function getStudentData (): StudentManager {
//     return students;
// }

// export {getStudentData};

function calculateAverage(weights: CourseGrades): number {
  
}


function addStudent(newStudentData: NewStudentRequest): boolean {
    // Destructure the name and weights
    const { name, weights } = newStudentData;
  
    // the the name is already in `students` 
      // then return false
  
    // Calculate the student's current average (use the function previously defined)
  
    const newStudent: Student =  // Create a `Student` object using the `name`, `weights` and `currentAverage`
  
  
    // Add the new Student to the `students` object. The student's name is the key
  
    // Finally, return true since the student was added
  }


function getStudent(studentName: string): Student | undefined {
    // If the student's name is not in `students`
      // then return undefined
  
    // Return the student's information (their name is the key for `students`)
}

  export { students, addStudent, getStudent };
  
  