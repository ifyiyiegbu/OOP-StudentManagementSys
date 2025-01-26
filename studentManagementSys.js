class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // Student class inherits from Person class
  class Student extends Person {
    constructor(firstName, lastName, studentId, department, grades = {}) {
      super(firstName, lastName); 
      this.studentId = studentId;
      this.department = department;
      this.grades = grades; 
    }
  
    calculateAverageGrade() {
      const gradeValues = Object.values(this.grades);
      if (gradeValues.length === 0) return 0;
      const total = gradeValues.reduce((sum, grade) => sum + grade, 0);
      return total / gradeValues.length;
    }
  
    getStudentDetails() {
      return {
        "Full Name": this.getFullName(),
        "Student ID": this.studentId,
        Department: this.department,
        Grades: this.grades,
        "Average Grade": this.calculateAverageGrade().toFixed(2),
      };
    }
  }
  
  // Student Management System class
  class StudentManagementSystem {
    constructor() {
      this.students = [];
    }
  
    // Add a new student
    addStudent(firstName, lastName, studentId, department, grades) {
      const newStudent = new Student(firstName, lastName, studentId, department, grades);
      this.students.push(newStudent);
      console.log(`${firstName} ${lastName} has been successfully added as a student.`);
    }
  
    // View a student's details
    viewStudentDetails(studentId) {
      const student = this.students.find((s) => s.studentId === studentId);
      if (!student) {
        console.log(`Student with ID ${studentId} is not registered.`);
        return null;
      }
      console.log("Student Details:", student.getStudentDetails());
      return student;
    }

    // View all students details
  viewAllStudents() {
    if (this.students.length === 0) {
      console.log("No students registered.");
      return;
    }
    console.log("All Registered Students:");
    this.students.forEach((student) => {
      console.log(student.getStudentDetails());
    });
  }
}
    
  // Example

  //Create a new Student Management System
  const learnableStudentManSys = new StudentManagementSystem();
  
  // Adding students to the system
  learnableStudentManSys.addStudent("Ifeyinwa", "Iyiegbu", "FE/25001", "Frontend Engineering", { IntrotoProgramming: 8, GitVersionControl: 7, OOProgramming: 6 });
  learnableStudentManSys.addStudent("Fred", "Aniebonam", "BE/25002", "Backend Engineering", { IntrotoProgramming: 10, GitVersionControl: 8, OOProgramming: 7 });
  
  // To view a student details
  learnableStudentManSys.viewStudentDetails("BE/25002");
  
  // Attempting to view a non-existent student
  learnableStudentManSys.viewStudentDetails("SE/25003");

  // To view details of all registered students
  learnableStudentManSys.viewAllStudents();
  