function calculateGrades() {
    const students = [
        { name: "Andrew", marks: 70 },
        { name: "Isaac", marks: 85 },
        { name: "Phillip", marks: 55 },
        { name: "Miguel", marks: 45 },
        { name: "Michael", marks: 30 }
    ];

    for (let student of students) {
        let marks = student.marks;
        let grade;

        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60 && marks <= 79) {
            grade = "B";
        } else if (marks >= 50 && marks <= 59) {
            grade = "C";
        } else if (marks >= 40 && marks <= 49) {
            grade = "D";
        } else {
            grade = "E";
        }

        console.log(`Grade for ${student.name} (${marks} marks) is: ${grade}`);
    }
}


calculateGrades();

