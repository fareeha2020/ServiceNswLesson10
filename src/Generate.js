//const DataLayer=require("./DataLayer");
const {StudentDataReader,TeacherDataReader}=require("./DataLayer");
// const StudentDataReader = require("./DataLayer/StudentDataReader");
// const TeacherDataReader = require("./DataLayer/TeacherDataReader");
const fs = require("fs");
const path = require("path");

const baseFilePath = path.join(__dirname,"../", "JSONData");

if (!fs.existsSync(baseFilePath)) {
    fs.mkdirSync(baseFilePath)//if there is folder inside basefolder dont do any otherwise create one as JSON data
}

let _studentDataSet = new StudentDataReader(path.join(baseFilePath, "Students.json"));
let _teacherDataSet = new TeacherDataReader(path.join(baseFilePath, "Teachers.json"));

_teacherDataSet.generateRandomTeachers();//generates Random teachers same as person

let teacherIds = _teacherDataSet.getArrayFromFile().map(teacher => teacher.id);
_studentDataSet.generateRandomStudents(teacherIds);//generates students Id of havind  teacher ids's
