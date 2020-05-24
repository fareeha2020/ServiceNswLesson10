const Person = require("./Person");
const random = require("../Common/Random");
const uuid=require("uuid");

class Student extends Person {
    constructor(firstName, lastName, age, grades, teacherId, id = uuid.v4()) {
        super(firstName, lastName, age, id);
        this.teacherId = teacherId;
        this.grades = grades;
    }

    getTeacher(teachers) {
        return teachers.find(teacher => teacher.id == this.teacherId);
    }

    //10 and valid Id here is teacher ID bue asl what is hapening in validIds[]
    //fn,ln,age,ID,teacherId,grades
    //if teacher Id's generated  are 3 in number

    static generateRandomPeople(num, validIds) {
        return super.generateRandomPeople(num).map(person => new Student(
            person.firstName,
            person.lastName,
            person.age,
            this.generateRandomGrades(),
            validIds[random.getRandomNumber(validIds.length)],
            person.id
        ));
    }

    static generateRandomGrades() {
        let numberOfGrades = random.getRandomNumber(10);
        let grades = [];
        for (let i = 0; i < numberOfGrades; i++) {
            grades.push(random.getRandomNumber(100));
        }
        return grades;
    }
}

module.exports = Student;