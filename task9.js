const students = [
    {
      name: "Паша",
      grades: [100, 85, 90]
    },
    {
      name: "Лена",
      grades: [85, 80, 92]
    },
    {
      name: "Макс",
      grades: [95, 85, 90]
    }
  ];
  students.forEach(student => {
    const avgGrade = Math.round( student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length);
    console.log(`${student.name} average grade is ${avgGrade}`);
  });
  