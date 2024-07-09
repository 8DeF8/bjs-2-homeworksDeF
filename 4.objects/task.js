function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.hasOwnProperty('marks')) {
        console.log("Студент отчислен.");
        return;
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    return this.marks.reduce((acc, currentValue) => acc + currentValue) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
  
}
