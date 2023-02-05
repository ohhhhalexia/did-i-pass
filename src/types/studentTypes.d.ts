type CourseGrades = {
    assignmentWeights: Array<CourseGrade>;
    finalExamWeight: number;
}

type CourseGrade = {
    name: string;
    weight: number;
    grade: number;
};

type Student = {
    name: string;
    weights: CourseGrades;
    currentAverage: number;
}

type NewStudentRequest = {
    name: string;
    weight: CourseGrades;
}

type AssignmentGrade = {
    grade: number;
};

type FinalGrade = {
    overallScore: number;
    letterGrade: string;
};

type FinalExamScores = {
    neededForA: number;
    neededForB: number;
    neededForC: number;
    neededForD: number;
};


type StudentManager = Record<string, Student>;

